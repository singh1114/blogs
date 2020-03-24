---
title: 'Validate your request parameters easily using Vanilla JS | JOI | AJV in Node.js'
date: 2019-07-05T15:55:00.000Z
description: >-
  Validate your request parameters using a validator middleware that can be
  plugged into any Nodejs/ Express application or using JOI or AJV.
published: true
image: 'https://i.imgur.com/4BWtPKb.png'
tags:
  - nodejs
  - technology
  - javascript
  - productivity
categories:
  - nodejs
  - technology
  - javascript
  - productivity
canonical_url: 'https://ranvir.xyz/blog/how-to-write-a-request-parameter-validation-middleware-in-node.js/'
---

![Validate your request parameters using middleware in node.js](https://i.imgur.com/4BWtPKb.png)

Some time ago, while working on a big Node.js application, I could see same validation for the request parameters being repeated again and again all over the routes. Every API was literally checking if certain parameter was being passed by the frontend or checking if the certain parameter was passed as `String/ Integer`.

I get it! You don't want to repeat that code again and again. Maybe you are sick of copying those little function calls all over your code with some change in the parameters. Every time you have to create a new route or new API endpoint you have to write the same code.

For example:

```javascript
// Inside the route.
if (!request.phone_number) {
    throw new Error('Main request parameter not present.');
}
```

> In this post we are going to learn the simplest way in which you can validate your request parameter or any other thing for that matter.

If you are starting out your app, this might look fine but as your app keeps getting bigger and bigger, you might want to write some specific validation code that can handle this for you.

If you want to wrap all your requests with some special validations, this tutorial is for you.

This will also be helpful for your developers to know which parameters are required for the given route and which of them are optional. All you need to do is create a **middleware** which will keep account of all your parameters.

A good example for which a middleware can be used is logging. You can log your request parameters, headers, response data to whatever logging system you are using.

We are going to talk about a specific type of middleware in this article, but you can extend it to anything you want to.

## A middleware that can validate the request parameters.

How would you feel when you don't have to worry about the incoming request parameters in the routes?

Pretty awesome, right!

You will never have to make any check related to the request parameters. All these checks will be transported to the middleware.

## What is a middleware?

> Middleware is a piece of code that is used to make changes to request or response data.

In terms of web development, we call them middlewares... Just a fancy name( makes sense though).

Let's start by writing a simple middleware.

```javascript
const validateParams = function (requestParams) {
    return function (req, res, next) {
        for (let param of requestParams) {
            if (checkParamPresent(Object.keys(req.params), param)) {
                let reqParam = req.params[param.param_key];
                if (!checkParamType(reqParam, param)) {
                    return res.send(400, {
                        status: 400,
                        result: `${param.param_key} is of type ` +
                        `${typeof reqParam} but should be ${param.type}`
                    });
                } else {
                    if (!runValidators(reqParam, param)) {
                        return res.send(400, {
                            status: 400,
                            result: `Validation failed for ${param.param_key}`
                        });
                    }
                }
            } else if (param.required){
                return res.send(400, {
                    status: 400,
                    result: `Missing Parameter ${param.param_key}`
                });
            }
        }
        next();
    }
};

const checkParamPresent = function (reqParams, paramObj) {
    return (reqParams.includes(paramObj.param_key));
};

const checkParamType = function (reqParam, paramObj) {
    const reqParamType = typeof reqParam;
    return reqParamType === paramObj.type;
};

const runValidators = function (reqParam, paramObj) {
    for (let validator of paramObj.validator_functions) {
        if (!validator(reqParam)) {
            return false
        }
    }
    return true;
};

module.exports = {
    validateParams: validateParams
};
```

So this is the simple structure of middleware in Node.js. There are three types of checks that are going on in there.

## Required Parameter check

This check tries to find if the parameter being requested is required or not. We can specify this while specifying the schema of the route parameters. I will share this schema a little later in this tutorial. If the parameter is required for the route and is not present in the parameters of the route, it will simply raise 400.

This can also give a custom message specifying which param exactly is not present in the request parameters. This part is described `on line 21`.

## Type check

JavaScript being less strict related to the type of the variables, we want to add a check which will try to check if the type specified in the schema of the route parameters is the same as the type received from the request parameters.

This part of the code is written `on line 6`.

## Other validation checks

There are multiple occasions when you want to add your own validations to request parameters. For example, you don't want the value to be equal to 0. You can simply create the function and pass it in the schema of the route parameters. These checks are written `on line 13`.

Here is the schema for route parameters.

```javascript
exports.setupEndpoints = function (server, routeURI) {
    server.post(`${routeURI}/abc`, validateParams([
		{
			param_key: 'a',
			required: true,
			type: 'string',
			validator_functions: []
		}]), routeFunction);
};
```

This is how you will create a route in your `NodeJS` app.

The cool thing about this is you can at any time integrate your own checks into this and you don't have to worry about the error messages passed to frontend. They are handled as well.

## Writing tests for simple request parameter validation middleware

One of my colleagues asked me to write tests for this framework as this was going to be used at a lot of places and I agreed with him. But I was a little sceptical on how can we test this framework. After some Googling and StackOverflowing, I was able to test this framework. Here is the code for this.

```javascript
const sinon  = require('sinon');

const should = require('should');

describe('validate Params middleware', () => {
    it('When param is required', () => {
        let nextSpy = sinon.spy();
        let response = function () {};
        response.send = sinon.spy();
        validateParams([{
                type: 'string',
                required: true,
                param_key: 'param_1',
                validator_functions: []
        }])(sinon.useFakeXMLHttpRequest(), response, nextSpy);
        response.send.args[0][0].should.equal(400);
        response.send.args[0][1].result.should.equal(
            'Missing Parameter param_1');
    });
    it('When param type is different', () => {
        let nextSpy = sinon.spy();
        let response = function () {};
        response.send = sinon.spy();
        let request = sinon.useFakeXMLHttpRequest();
        request.params = {
            param_1: 908998989
        };
        validateParams([{
                type: 'string',
                required: true,
                param_key: 'param_1',
                validator_functions: []
        }])(request, response, nextSpy);
        response.send.args[0][0].should.equal(400);
        response.send.args[0][1].result.should.equal(
            'param_1 is of type Number but should be string');
    });
    it('When validation test passes', () => {
        let nextSpy = sinon.spy();
        let response = function () {};
        response.send = sinon.spy();
        let request = sinon.useFakeXMLHttpRequest();
        request.params = {
            param_1: '9089980989'
        };
        validateParams([{
                type: 'string',
                required: true,
                param_key: 'param_1',
                validator_functions: []
        }])(request, response, nextSpy);
        nextSpy.calledOnce.should.be.true();
    });
});
```

## Using Joi as an alternative to adding request parameter validator

I later found that you can use [Joi](https://github.com/hapijs/joi) for adding validations to parameters. This is a good option and you can use it if you want.

They provide a lot of validations out of the box which are easy to plug in.

Off course, you will have to install Joi to use it.

```javascript
npm install joi
```

Your `50` line of middleware code will just reduce to `26` lines.

```javascript
const Joi = require('joi');
const lodash = require('lodash');

const validateParams = function (paramSchema) {
    return async (req, res, next) => {
        const schema = Joi.object().keys(paramSchema);
        const paramSchemaKeys = Object.keys(paramSchema);
        let requestParamObj = {};
        for (let key of paramSchemaKeys){
            requestParamObj[key] = lodash.get(req.params, key);
        }
        try{
            await Joi.validate(requestParamObj, schema);
        } catch (err) {
            return res.send(400, {
                status: 400,
                result: err.details[0].message
            });
        }
        next();
    }
};

module.exports = {
    validateParams: validateParams
};
```

The main thing to look at here is the

```javascript
await Joi.validate(requestParamObj, schema);
```

Similarly, you will have to set up your `route` as follows.

```javascript
exports.setupEndpoints = function (server, routeURI) {
    server.post(`${routeURI}/abc`, validateParams({
		abc: Joi.string().length(10).required(),
	}), routeFunction);
};
```

Pretty clean right, I like this method more than creating something new of my own. But you will have to keep in mind that this will increase your bundle size. This is something that you have to think on your own and make a decision.

## Using ajv as an alternative to adding request parameter validator

Finally, we settled for `ajv` for validating our requests.

![Validate your request param using ajv in node.js](https://i.imgur.com/MRuoSal.png)

### Why `ajv`?

`ajv` uses the `JSON` schema validation which is kind of a standard in any language, and we can keep using it, even if we move to another language in the future.

Also, they consider themselves as the fastest JSON schema validator out there and speed is something that we care for a lot.

Install ajv using the following command.

```javascript
npm install ajv
```
Finally, write the ajv validation middleware as follows.

```javascript
const Ajv = require('ajv');
const lodash = require('lodash');

const validateParams = function (paramSchema) {
    return async (req, res, next) => {
        const ajv = new Ajv({$data: true});
        const paramSchemaKeys = Object.keys(paramSchema.properties);
        let requestParamObj = {};
        for (let key of paramSchemaKeys){
            requestParamObj[key] = lodash.get(req.params, key);
        }
        const validated = ajv.validate(paramSchema, requestParamObj);
        if (!validated) {
            return res.send(400, {
                status: 400,
                result: getCustomMessage(ajv.errors[0])
            })
        }
        next();
    }
};

const getCustomMessage = (errorObject) => {
    if (['minLength', 'maxLength'].includes(errorObject.keyword)) {
        return `${errorObject.dataPath.replace('.', '')} ${errorObject.message}`;
    }
    return errorObject.message;
};

module.exports = {
    validateParams: validateParams
};
```

All you have to worry about is the `ajv.validate` function, which is used to carry out the validations. Unlike Joi, this `validate` method is not [async](https://ranvir.xyz/blog/basic-introduction-to-node.js-async-await/).

The validation definition method is a little different for `ajv`.

```javascript
exports.setupEndpoints = function (server, routeURI) {
    server.post(`${routeURI}/abc`, validateParams({
		properties: {
			abc: {
				type: 'string',
				maxLength: 10,
				minLength: 10
			},
		},
		required: ['abc']
	}), routeFunction);
};
```

I hope you guys will like the idea behind the post. Please share it with your colleagues and let me know on social media platforms.

I am also open to other standards that are followed in the market. Please leave your ideas in the comments.
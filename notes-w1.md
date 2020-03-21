## Development Environment Setup

we'll learn how to effectively use CSS to produce responsive websites. That automatically adjusts to any screen size, allowing the user to interact with the website on any device from a desktop to a mobile phone. We also delve into JavaScript and AJax, the technologies that bring our pages to life with functionality in external data.



```
npm --version//node package manager, and check version
npm install -g browser-sync // -g here is just the installer for all users of the computer, not just you.
```



```
subl . //  I want you to go ahead and start Atom and place the project as being in this folder
browser-sync start --server --directory --files "**/*"
// start the Browsersync, and we want to start it in --server mode, which means I want you to serve up everything that's in this directory. And we'll also start it with --directory mode, and what that's going to do is it's going to serve up the directory even if there's nothing in it, it will at least show us the directory. And last but not least, we'll say which files do we want to watch for changes and once those files changes, I want you to go ahead and reload it. And what we'll want to watch is
```



## Why AngularJS? Why not keep things simple?

You know how to structure a web page using HTML. You can lay out and style that page using CSS, and you can add functionality that makes your page come alive. You can request data from the server and other services on the web. 



#### Why we need these frameworks?

First of all, we need <u>good code organization</u> so we can find relative code we need to work on quickly. Second, updating part of our code shouldn't affect other parts at the same time. That will allow us to <u>write smaller chunks of code</u> and not have to deal with the rest of the system every time we update a small thing. We also want to write <u>reusable code</u>. We don't want to write the same code twice, and certainly don't want to debug it in more than one place. And finally, we need to be able to write <u>testable code</u>. And that's code that's written in small enough chunks that's makes it easy to test without having to deal with the entire system all at once.



#### Why dose code get complexed?

Lack of high cohesion and low coupling

**High cohesion** is when small pieces of functionality are strongly related to each other within some code boundary. Now, I say code boundary for a couple of reasons. One, because in some languages, the boundary that this principle usually refers to is a class, in some other languages, it's a module. But in other or perhaps <u>*more important reason*</u> is because it's really a question of what you're designing for high cohesion. You can try to design a whole module for high cohesion or you could try to design a simple function for high cohesion.

**Low coupling**: So to say it most succinctly, when we speak about software components, you have loose coupling in such a case in which if you change one component, you do not have to change the other.





#### Model-View-ViewModel(MVVM)

**model**: It represents and holds raw data. This is something you would get directly from a database or from a REST API call from the server. It doesn't mean that all of it is going to get displayed. It's very possible that given some values that are coming back from the server, you will take those values and add them or somehow manipulate them and actually display the result of that to the user. Now, this component can also contain logic to retrieve the data from some source. For example, it could basically make a HTTP call, an AJAX call, to the server to retrieve the raw data. <u>It just contains the data.</u>

**view**: It only displays the data that it is given, never changes that data. <u>It just displays it</u>. And on top of that, <u>it declaratively broadcasts events</u>, but never handles them itself. Now, again, declaratively means that you don't actually write any JavaScript code in order to trigger or to raise an event from the view. It just declaratively states that if such an event happens, where should we go to handle that event. And it points to the ViewModel.

In a web app, it's just the HTML and CSS

**ViewModel**: it does the presentation logic. The most important thing to remember about this component is that never asks the view to display anything. What that means is that it never directly manipulates the DOM. So it never calls getElementById, it doesn't even know what IDs are present in the HTML to begin with.

This allows us that loose coupling that we spoke about between the View, that is, the HTML and CSS, and the ViewModel, our JavaScript that supports that view with presentation logic.

**Where the framework comes in?**

There's one more crucial component to this design pattern, and that is the declarative binder. The **declarative binder** declaratively binds the model over the view model to the view. It's that glue between the view model we just discussed and the view that contains HTML and CSS. Declarative here means you don't have to write any code for this to happen. The framework does this magic for you.

![image-20200305171602516](https://tva1.sinaimg.cn/large/00831rSTgy1gcjugfrm6sj31he0u01kx.jpg)



So what the usual thing happens is the presentation logic reaches out to the model to ask for some business data or for some sort of data. The model returns that data to the view model. At that point, the view model binds that data to certain components or certain things inside the view. That data binding happens declaratively, which means you don't actually manipulate anything inside the view, you don't manipulate the DOM in order to display that view model data in the view.

**That's why Angular is sometimes also called Model-View-Whatever** some features of AngularJS allow you to break away from MVVM pattern and do whatever other pattern you feel is most suitable for the situation. This is even to the point of letting you manipulate the DOM directly in your JavaScript code.



## AngularJS Installation & Basics

To get the `angular.min.js` , go to the angularjs website and download it.

![image-20200306144050849](https://tva1.sinaimg.cn/large/00831rSTgy1gckvllmqbvj317g0noaev.jpg)

And obviously, we want our app.js to follow angular.min.js, because this is HTML, and browsers interpret these lines sequentially. So since we're going to be using AngularJS inside of our app.js, we want that to be processed first and then be available to use inside app.js.



We want to make sure that no local variables bleed into the global scope. Once we've defined our IIFE, we're ready to start our AngularJS application.

And the very first thing we want to do is define our main app, the thing that's going to be responsible for some chunk of HTML in our index.html. So the thing that AngularJS exposes on the global scope is really just one particular object, and that object is called angular.

And the first thing that this <u>module method</u> takes is the name of our application. And the second is a list of dependencies that our module or our application is going to need, in the form of an array.

We can now go ahead and hook up this myFirstApp into our index.html. There's a special attribute that we could place really anywhere we want, but usually we want to put it on the very outer tag that you want the Angular application to be responsible for. And the attribute is called ng-app, which stands for Angular application. And we want to name it exactly the same way we named it in our app.js, which is myFirstApp. So this module has now been bound, this AngularJS app has been bound to our HTML(because we put the attribute in the html tag).

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gckw67e66bj30rq0p8n11.jpg" alt="image-20200306150058242" style="zoom:30%;" />

Remove the semicolon and since module function returns module instance, we can just go ahead and <u>chain</u> the next call to .controller. And <u>.controller function</u> is really the way we <u>define the view model of our view</u>, our view being index.html. It takes the name of our view model, or the name of our controller, and we'll call it MyFirstController. And it takes a function that defines the functionality for that particular controller.



Lecture 5

And now what we're going to do is we're going to use a <u>special object</u> that AngularJS provides for us in order to share data between our view model and our view. And that special object is called <u>$scope</u>. Whenever, by the way, you see inside AngularJS **a dollar sign** in front of some variable name, it means that this is something that is reserved for Angular, this is something that Angular provides. There's nothing really stopping you from naming your own variables with the dollar sign, but the convention is don't do that.

![image-20200306154717654](https://tva1.sinaimg.cn/large/00831rSTgy1gckxiedy3hj314409q409.jpg)

Now this name and sayHello are actually now sitting on the scope, and this scope is available inside my ng-controller or anything below it or inside of it that this ng-controller is in charge of.



![image-20200306155316306](https://tva1.sinaimg.cn/large/00831rSTgy1gckxomvm5gj30s406s3zs.jpg)

And I'll use a special Angular attribute called **ng-model** to tell it that I want the value of this input attribute to always be equal to something on my scope, something called name.



#### Lecture 7: What’s Behind the “Magic”: Custom HTML Attributes

It is not a standard HTML attribute, and the browser, the software that runs the browser tries to interpret every one of these tags and every one of these attributes. And it doesn't really know what to do with this greeting attribute, and therefore just ignores it. However, there are methods and functions in JavaScript to let us get at the actual attribute and at the value.



## Dependency Injection

Dependency injection is yet another design pattern. We've seen model, view, ViewModel, and now there's another called dependency injection. So, it's another design pattern that implements something called inversion of control(IoC) for resolving dependencies. (imagine shopping cart and check out using credit cards from different banks)

Client gets called with the dependency by some system, in our case, the 'system' is AngularJS. Client is not responsible for instantiating the dependency.



<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gcl7o45xn6j30wk0huack.jpg" alt="image-20200306213847432" style="zoom:33%;" />

 We are creating a DIController, and what I'm passing next is the value of the function. 

Pretty much anything in Angular with a **dollar sign** in front of it, not only does it belong to Angular, <u>but it's also referred to as a service</u>. So from now on, when I refer to $scope, I'm really going to just refer to the scope service.



What Angular does is it can actually go ahead and parse out these names and find a matching service and then go ahead and instantiate those services and then call DIController with those instantiations. The service that does all this in Angular is called $inject.

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gcl8k7kxcnj31180icwj2.jpg" alt="image-20200306220936194" style="zoom:33%;" />

You'll see that our $injector.annotate gave us an array of the argument names to the function DIController. And this is exactly what Angular is using internally in order to figure out where to inject which services.



#### Lecture 10: Protecting Dependency Injection from Minification

Why we minify?

Minification is the process of removing all unnecessary characters from source code. And what's here, italicized here is without changing the functionality of the source code. So, it should be clear that minification is going to be the process that's going to make our code completely unreadable, yet at the same time, 100% functional as before.



Javascript-minifier.com

while directly use the minified code will cause error

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gclail3cq7j30wo0c6ac5.jpg" alt="image-20200306231709190" style="zoom:33%;" />

The second argument right now is a function value. But the truth is, it doesn't have to be. It can be an array, and it's an array of strings with the last element in the array, be the function that is responsible to be the controller function.

![image-20200306231920530](https://tva1.sinaimg.cn/large/00831rSTgy1gclakqzcvej31ba03udgm.jpg)

we've told Angular is that scope and filter in this order is going to be appearing as the arguments Into this DIController function, and this sovels the above issue, as now, these strings are protected from minification because these are string literals. Similarly, this name Yaakov right here is a string literal, and it'll obviously will never get minified because it's real data.



Another way to solve this, more elegant: attach $inject property to the function object

<img src="https://tva1.sinaimg.cn/large/00831rSTgy1gclats5vfnj30za0hon0o.jpg" alt="image-20200306232801274" style="zoom:50%;" />

Angular is going to look for this function, is going to also look and check to see whether or not we have a $inject property on the function that is supposed to be the controller. And if it finds it, it will use that array as guidance to see which service to inject into which argument and the controller function itself.



#### Lecture 11, Part 1: Expressions and Interpolation

Expression: {{ exp }}

Something that evalauates to some value, processed by AngularJS & roughly similar to the result of `eval(some_js)`. Executed in the context of \$scope and has access to properties of $scope. Doesn't throw errors if a type error or reference error. Control flow functions(like if else) are not allowed. Accept a filter or a filter chain to format the output.













## Previous Knowledge

### IIFE

An **IIFE** (Immediately Invoked Function Expression) is a [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) [function](https://developer.mozilla.org/en-US/docs/Glossary/function) that runs as soon as it is defined.

```javascript
(function () {
    statements
})();
```



It is a design pattern which is also known as a [Self-Executing Anonymous Function](https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function) and contains two major parts:

1. The first is the anonymous function with lexical scope enclosed within the [`Grouping Operator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) `()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression `()` through which the JavaScript engine will directly interpret the function.

Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

```Javascript
var result = (function () {
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"
```


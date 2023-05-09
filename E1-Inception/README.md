## Namaste React Course by Akshay Saini

# _Episode 1 - Inception_

## Q: Difference between a `library` and a `framework`?

A: Both contains reusable pieces of code. The main difference is who calls whom. In library, the application calls the code in the library i.e. the developer decides when and where to call the library code. In framework, the framework calls the user code. Here, the framework controls the flow of the program.
In layman terms, a `library` is a tool that provides a specific functionality whereas a `framework` is a set of tools and guidelines for building apps.

https://www.interviewbit.com/blog/framework-vs-library/
https://www.youtube.com/watch?v=D_MO9vIRBcA
https://www.youtube.com/watch?v=sXA1zpv4DhA -> Hitesh Choudhary

## Q: What is `CDN`? Why do we use it?

A: A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed. By caching content physically close to where a user is and reducing the distance it has to travel, latency is reduced. This process also decreases stress on origin servers by distributing the load geographically across multiple servers.
The CDN delivers content through a network of servers in a secure and efficient way.

https://blog.hubspot.com/website/what-is-a-cdn-definition
https://www.youtube.com/watch?v=Bsq5cKkS33I -> IBM Technology
https://www.youtube.com/watch?v=Bsq5cKkS33I ->ByteByteGo

## Q: Why`react` is known as `react`?

A: `React` is called `React` because of its ability to "react" to changes in state and data within an application and update the User Interface in a declarative manner(developers describe what the user interface should look like at any given moment, and React takes care of efficiently updating the DOM as needed when the data changes.).

## Q: `crossorigin` attribute in script tag?

A: Web pages often make requests to load resources on other servers. A `cross-origin` request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. The crossorigin attribute on a <script> tag specifies that CORS is supported when loading an external script file from a third party server or domain. CORS is a standard mechanism used to retrieve files from other domains.

https://www.w3schools.com/tags/att_script_crossorigin.asp
https://www.dofactory.com/html/script/crossorigin#:~:text=The%20crossorigin%20attribute%20on%20a,retrieve%20files%20from%20other%20domains.

https://www.youtube.com/watch?v=PNtFSVU-YTI  -> Web Dev Simplified
https://www.youtube.com/watch?v=tcLW5d0KAYE  -> Akshay Saini
https://www.youtube.com/watch?v=HwQNpeWfd_U  -> Codedamn

Also, read about the SOP(Same Origin Policy) of Browsers.

## Q: `React` v/s `ReactDOM`?

A: `React` is a JavaScript library for building User Interface. `ReactDOM` is also a JS library which allows `React` to interact with the DOM. The `react` package contains `React.createElement()`, and several other functions. The `react-dom` package contains `ReactDOM.render()`, and `ReactDOMServer.renderToString()` for server-side rendering support.

https://stackoverflow.com/questions/34114350/react-vs-reactdom
https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745

## Q: Difference between a `react.development.js` and a `react.production.js`?

A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public.
Development version of `react` contains an uncompressed version and is several times (maybe 3-5x) slower than the production version. The production version contains minified code and includes extra performance optimizations.

https://stackoverflow.com/questions/48151128/difference-between-production-and-development-build-in-reactjs

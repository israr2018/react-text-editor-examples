This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app was created as a research project to compare different rich text editor libraries. It includes 3 simple examples of editors in React using Froala, Quill and Draft.js. 

## Comparison graph between Draft.js, Slate, Quill, Medium Editor
See a detailed comparison of these 4 libraries in terms of downloads, issues, repo stars etc [in this npm post](https://www.npmtrends.com/draft-js-vs-medium-editor-vs-quill-vs-slate).


## Comparison table between Froala, Quill, Draft.js
|   | Froala .  https://github.com/froala/wysiwyg-editor                                                                                                                                                                                       | Quill .  https://github.com/quilljs/quill/                                                                                                                  | Draft    https://github.com/facebook/draft-jshttps://www.draft-js-plugins.com/                                                                                                                                                                                                                                                                                                                                                             |   |   |
|---|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|---|
| + | Powerful JavaScript rich text editor with a lot of functionality out of the box.There is an OS React implementation.Raw HTML editing functionality.                                                                                      | Modern WYSIWYG editor built for compatibility and extensibility - a lot of functionality out of the box. Popular open-source library with good maintenance. | Very flexible and customisable given that you have to to create one on your own. Maintained by Facebook - picking up in popularity. Most downloaded among popular open-source libraries over the last year.                                                                                                                                                                                                                                |   |   |
| - | Froala WYSIWYG HTML Editor requires jQuery 1.11.0 or higher and the iconic font named Font Awesome 4.4.0. There are just a few open issues on the React Froala component but the maintainers don’t seem to be very active on that front. | No raw HTML editing functionality. Ui not so sleek.Requires more setup compared to Froala.                                                                  | It provides the building blocks (framework and plugins) to create an editor, but is not one ready to use by itself.It is for React only (depends on React and React DOM).Not all existing plugins are compatible across different platforms (desktop, mobile etc), which will be a limitation for the form builder, given we want to support multiple environments and platforms. Buggy & can add a lot to JS bundle size (see Resource 5) |   |   |
|   |                                                                                                                                                                                                                                          |                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                            |   |   |

## Resources
1. https://www.npmtrends.com/draft-js-vs-medium-editor-vs-quill-vs-slate  
1. https://handsontable.com/blog/articles/2017/8/11-best-rich-text-editors  
1. https://www.reddit.com/r/reactjs/comments/8cggoc/which_richtexteditor_in_2018_draftjs_or_slatejs/   
1. https://quilljs.com/guides/comparison-with-other-rich-text-editors/  
1. https://mxstbr.com/thoughts/tech-choice-regrets-at-spectrum/   
1. http://prosemirror.net/   

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

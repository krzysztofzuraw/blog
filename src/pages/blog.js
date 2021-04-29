"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.pageQuery = void 0;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var components_1 = require("../components");
var BlogIndex = function (_a) {
    var edges = _a.data.allMarkdownRemark.edges;
    return (<components_1.Layout>
      <components_1.SEO slug="/blog" title="Blog index"/>
      <h1>Blog index</h1>
      <ul className="blog-list">
        {edges.map(function (_a) {
            var _b, _c, _d, _e;
            var node = _a.node;
            return (<li key={node.id}>
            <components_1.Link to={(_b = node.frontmatter) === null || _b === void 0 ? void 0 : _b.slug}>{(_c = node.frontmatter) === null || _c === void 0 ? void 0 : _c.title}</components_1.Link>
            <time dateTime={(_d = node.frontmatter) === null || _d === void 0 ? void 0 : _d.date}>{(_e = node.frontmatter) === null || _e === void 0 ? void 0 : _e.date}</time>
          </li>);
        })}
      </ul>
    </components_1.Layout>);
};
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogListPage {\n    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {\n      edges {\n        node {\n          id\n          frontmatter {\n            title\n            date(formatString: \"YYYY-MM-DD\")\n            slug\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query BlogListPage {\n    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {\n      edges {\n        node {\n          id\n          frontmatter {\n            title\n            date(formatString: \"YYYY-MM-DD\")\n            slug\n          }\n        }\n      }\n    }\n  }\n"])));
exports["default"] = BlogIndex;
var templateObject_1;

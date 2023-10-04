// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    }
  },
  computedFields
}));
var rehypeOptions = {
  theme: "material-theme-darker",
  keepBackground: true
};
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "material-theme-palenight",
          onVisitHighlightedLine(node) {
            node.properties.className.push("line-highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word-highlighted"];
          }
        },
        ,
        rehypeOptions
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2QWT2AJF.mjs.map

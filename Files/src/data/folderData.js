const tree = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [{ name: "index.js", isFolder: false }],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "date",
          isFolder: true,
          items: [
            {
              name: "folderData.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

export default tree;

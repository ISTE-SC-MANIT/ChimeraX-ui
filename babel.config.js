module.exports = {
    presets: [
        [
          "next/babel",
          {
            "preset-env": {},
            "transform-runtime": {},
            "styled-jsx": {},
            "class-properties": {}
          }
        ]
      ],
    plugins: [
        [
            "transform-imports",
            {
                "@material-ui/core": {
                    transform: "@material-ui/core/${member}",
                    preventFullImport: true,
                },
                "@material-ui/styles": {
                    transform: "@material-ui/styles/${member}",
                    preventFullImport: true,
                },
                "@material-ui/icons": {
                    transform: "@material-ui/icons/${member}",
                    preventFullImport: true,
                },
            },
        ],
        [
            "relay",
            {
                artifactDirectory: "./src/__generated__",
            },
        ],
    ],
};
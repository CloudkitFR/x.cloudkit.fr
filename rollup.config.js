import babel            from "@rollup/plugin-babel";
import externalGlobals  from "rollup-plugin-external-globals";
import { terser }       from "rollup-plugin-terser";


////////////////////////////////////////////////
//  ROLLUP
////////////////////////////////////////////////


export default {
    input: `src/client/index.js`,
    output: {
        format  : `es`,
        file    : `public/assets/js/script.js`,
    },
    plugins: [
        babel({
            babelrc: false,
            plugins: [
                "@vue/babel-plugin-jsx"
            ],
            babelHelpers: `bundled`
        }),
        externalGlobals({
            "vue"       : "Vue",
            "vue-router": "VueRouter"
        }),
        terser()
    ]
}

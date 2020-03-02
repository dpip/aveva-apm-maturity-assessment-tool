import React from "react"
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { Helmet } from "react-helmet";
export default ({ children }) => (
    <>
        <Helmet>
            <meta charset="utf-8" />
            <title>AVEVA - Global Leader in Industrial Software</title>
            <meta name="description"
                content="The AVEVA Software portfolio has been built through years of industry-leading innovation in technology and business alignment with customers worldwide." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="icon" type="image/png" href="https://www.aveva.com/RedesignV2/Content/favicons/favicon.ico" />
            <link rel="icon" type="image/png" href="https://www.aveva.com/RedesignV2/Content/favicons/favicon-96x96.png"
                sizes="96x96" />
            <link rel="icon" type="image/png" href="https://www.aveva.com/RedesignV2/Content/favicons/favicon-32x32.png"
                sizes="32x32" />
            <link rel="icon" type="image/png" href="https://www.aveva.com/RedesignV2/Content/favicons/favicon-16x16.png"
                sizes="16x16" />
            <link rel="apple-touch-icon" sizes="57x57"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180"
                href="https://www.aveva.com/RedesignV2/Content/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" href="https://www.aveva.com/RedesignV2/Content/favicons/android-icon-192x192.png"
                sizes="192x192" />
            <script src="https://kit.fontawesome.com/fbccc09528.js" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.5/es6-shim.min.js"
                integrity="sha256-v4QwgOaE1ZEBhPc7nMtFztuz+yWcxwiYM0OwG0Wtj3Q=" crossorigin="anonymous"></script>
            <script
                src="https://sw.aveva.com/hs-fs/hub/2900448/hub_generated/template_assets/1530144005912/Custom/page/js/main.js"></script>
            <script src="https://sw.aveva.com/hubfs/js-2018/app.bundle.js"></script>
        </Helmet>
        <Header />
        {children}
        <Footer />
    </>
)
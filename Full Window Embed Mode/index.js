/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

/* Control the default view mode and disable annotations */
const viewerConfig = {
    /* Allowed possible values are "FIT_PAGE", "FIT_WIDTH", "TWO_COLUMN", "TWO_COLUMN_FIT_PAGE" or "". */
    defaultViewMode: "",
    
    /* Disable annotation tools */
    enableAnnotationAPIs: false,
    
    /* Hide annotation toolbar */
    showAnnotationTools: false,
    
    /* Additional options to remove annotation features */
    showCommentPanel: false,
    
    /* Control other UI elements */
    showDownloadPDF: true,
    showPrintPDF: true,
    showLeftHandPanel: true,
    showPageControls: true,
    
    /* Disable right-click context menu (optional) */
    enableRightClickMenu: false
};

/* Wait for Adobe Acrobat Services PDF Embed API to be ready */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: "d7697b51cfba48ada9777888999412d6",
        /* Pass the div id in which PDF should be rendered */
        divId: "adobe-dc-view",
    });

    /* Invoke the file preview API on Adobe DC View object */
    adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
                url: "https://raw.githubusercontent.com/n8n-apex/pdf-embed-api-apex/main/Full%20Window%20Embed%20Mode/PDF/BQ%20Bildungsfabrik%20(1).pdf",
                /*
                If the file URL requires some additional headers, then it can be passed as follows:-
                headers: [
                    {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                    }
                ]
                */
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "BQ Bildungsfabrik (1).pdf"
        }
    }, viewerConfig);
});

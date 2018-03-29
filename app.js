require(
    [
        "dijit/registry",
        "dijit/layout/BorderContainer",
        "dijit/layout/TabContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!"
    ],

    function(registry, BorderContainer, TabContainer, ContentPane){
        
        var appLayout = new BorderContainer({
            design: "headline"
        }, "appLayout");

        var contentTabs = new TabContainer({
            region: "center",
            id: "contentTabs",
            tabPosition: "top",
            "class": "centerPanel"
        });

        appLayout.addChild( contentTabs );

        // create and add the BorderContainer edge regions
        appLayout.addChild(
            new ContentPane({
                region: "top",
                "class": "edgePanel"
            })
        );
        appLayout.addChild(
            new ContentPane({
                region: "left",
                id: "leftCol", "class": "edgePanel",
                splitter: true
            })
        );

        // Add initial content to the TabContainer
        contentTabs.addChild(
            new ContentPane({
                href: "home.html",
                title: "Inicio"
            })
        );

        // start up and do layout
        appLayout.startup();
    }
);
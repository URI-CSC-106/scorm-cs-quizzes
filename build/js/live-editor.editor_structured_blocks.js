window.StructuredBlocksEditor = Backbone.View.extend({
    initialize: function initialize(options) {
        this.defaultCode = (options.code || "").trim();
        this.autoFocus = options.autoFocus;
        this.config = options.config;
        this.record = options.record;
        this.imagesDir = options.imagesDir;

        this.config.editor = this;

        var toolbox = {};

        toolbox[i18n._("Shapes")] = [function () {
            rect(10, 10, 50, 50);
        }, function () {
            ellipse(120, 120, 100, 100);
        }, function () {
            line(10, 10, 50, 50);
        }, function () {
            triangle(20, 20, 100, 100, 250, 50);
        }, function () {
            arc(150, 150, 100, 100, 0, 360);
        }, { type: "Line", value: "" }];

        toolbox[i18n._("Colors")] = [function () {
            fill(255, 0, 0);
        }, function () {
            background(255, 0, 0);
        }, function () {
            stroke(0, 0, 0);
        }, function () {
            strokeWeight(3);
        }, function () {
            noStroke();
        }, function () {
            noFill();
        }];

        this.editor = new JSToolboxEditor({
            el: this.el,
            toolbox: toolbox,
            code: this.defaultCode || "",
            imagesDir: this.imagesDir
        });

        this.editor.on("updated", (function () {
            var code = this.editor.toScript();

            this.trigger("change", code);

            if (!this.defaultCode && code) {
                var $help = this.$el.find(".empty-help");
                $help.addClass("help-hidden");
                setTimeout(function () {
                    $help.remove();
                }, 300);
                this.trigger("userChangedCode");
            }
        }).bind(this));

        this.tooltipEngine = new StructuredBlocksTooltips({
            el: this.el
        });

        this.render();
    },

    render: function render() {
        if (!this.defaultCode) {
            this.$el.append("<div class='empty-help'>" + "<span>" + i18n._("Drag a block from the toolbox") + " <strong>→</strong></span>" + "<span><strong>↑</strong> " + i18n._("And put it up here to get started!") + "</span>" + "</div>");
        }

        this.$el.find(".block-trash").html("<div class='text-out'>" + "<div class='trash-icon'>" + "<div class='lid'></div>" + "<div class='lidcap'></div>" + "<div class='bin'></div>" + "</div>" + "<span>" + i18n._("Drag block here to remove.") + "</span>" + "</div>");
    },

    getAllFolds: function getAllFolds() {
        return [];
    },

    setFolds: function setFolds() {},
    setOptions: function setOptions() {},
    getCursor: function getCursor() {},
    setCursor: function setCursor() {},
    setSelection: function setSelection() {},
    focus: function focus() {},
    toggleGutter: function toggleGutter() {},
    setErrorHighlight: function setErrorHighlight() {},
    setReadOnly: function setReadOnly() {},
    undo: function undo() {},
    insertNewlineIfCursorAtEnd: function insertNewlineIfCursorAtEnd() {},

    text: function text(code) {
        if (code != null) {
            code = code.trim();
            if (code) {
                this.$el.find(".empty-help").remove();
            }
            this.editor.setCode(code);
        }

        return this.editor.toScript();
    }
});

LiveEditor.registerEditor("structured-blocks_pjs", StructuredBlocksEditor);

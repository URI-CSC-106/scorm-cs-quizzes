window["Handlebars"] = window["Handlebars"] || {};
window["Handlebars"]["templates"] = window["Handlebars"]["templates"] || {};
window["Handlebars"]["templates"]["sql-results"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <h1>"
    + container.escapeExpression(((helper = (helper = helpers.databaseMsg || (depth0 != null ? depth0.databaseMsg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"databaseMsg","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <table class=\"sql-schema-table\" data-table-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        <thead>\n            <th><a href=\"javascript:void(0)\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"row-count\">"
    + alias4(((helper = (helper = helpers.rowsMsg || (depth0 != null ? depth0.rowsMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rowsMsg","hash":{},"data":data}) : helper)))
    + "</span></th>\n        </thead>\n        <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n        </table>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr><td>\n            "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pk : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <span class=\"column-type-wrap\"><span class=\"schema-column-type\">"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span></span>\n            </td></tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span class=\"schema-pk\">(PK)</span>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <h1>"
    + container.escapeExpression(((helper = (helper = helpers.resultsMsg || (depth0 != null ? depth0.resultsMsg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"resultsMsg","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <table class=\"sql-result-table\">\n        <thead>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </thead>\n        <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n        </table>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "            <th>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</th>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.result : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tr>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isNull || (depth0 && depth0.isNull) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"isNull","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "                        <td>NULL</td>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <td>"
    + container.escapeExpression(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<html>\n<head>\n<style>\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n    empty-cells: show;\n    width: 100%;\n    margin-bottom: 20px;\n}\ntable thead {\n    background: #e6e6e6;\n    color: #000;\n    text-align: left;\n    vertical-align: bottom;\n}\nth:first-child {\n    border-radius: 6px 0 0 0;\n}\nth:last-child {\n    border-radius: 0 6px 0 0;\n}\nth:only-child{\n    border-radius: 6px 6px 0 0;\n}\ntbody {\n    border: 1px solid #dbdbdb;\n}\ntd {\n    border: 1px solid #eeeeee;\n    font-family: Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace;\n    font-size: inherit;\n    margin: 0;\n    overflow: visible;\n    padding: .3em 1em;\n}\nth {\n    font-family: \"Proxima Nova\", sans-serif;\n    padding: .4em 1em;\n}\nth a {\n    color: #699c52;\n}\nh1 {\n    clear: both;\n    color: #aaa;\n    font-family: \"Proxima Nova\", sans-serif;\n    font-size: 1.1em;\n    font-weight: normal;\n    margin-top: 10px;\n    text-transform: uppercase;\n}\ntable.sql-schema-table {\n    float:left;\n    width: auto;\n}\ntable.sql-schema-table .column-type-wrap {\n    float: right;\n    margin-left: 20px;\n    min-width: 70px;\n}\ntable.sql-schema-table .schema-pk {\n    color: #999;\n}\ntable.sql-schema-table .schema-column-type {\n    float: left;\n    color: #999;\n}\ntable.sql-schema-table + table.sql-schema-table {\n    margin-left: 10px\n}\ntable.sql-schema-table .row-count {\n    color: #999;\n    float: right;\n    margin-left: 30px;\n    text-align: right;\n    font-weight: normal;\n}\n</style>\n</head>\n\n<body>\n<div class=\"sql-output\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tables : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tables : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n</body>\n</html>\n";
},"useData":true});;
var SQLTester = function SQLTester(options) {
    this.initialize(options);
    this.bindTestContext();
};

SQLTester.prototype = new OutputTester();

/**
 * Small collection of some utility functions to tack onto the function
 * constructor itself.  Does not store state so don't require an object.
 */
SQLTester.Util = {
    /**
     * Obtains a list of all of the tables with information on each table
     *
     * @param db The database to perform the query on
     * @return An array of objects with the fields:
     *   - table: string
     *   - rowCount: number
     *   - rowsMsg: i18n header string for handlebars
     *   - columns: array of object of extra properties on each column
     *      cid, name, type, notnul, dflt_value, pk
     */
    getTables: function getTables(db) {
        var tablesResult = db.exec("SELECT name FROM sqlite_master WHERE " + "type='table' and tbl_name != 'sqlite_sequence';");
        var tables = tablesResult.length === 0 ? [] : tablesResult[0].values.map(function (t) {
            return t[0];
        });

        tables = tables.map(function (table) {
            var rowCount = SQLTester.Util.getRowCount(db, table);
            // NOTE(danielhollas): It seems we need to define this var here
            // so that it's available in handlebars
            // I18N: SQL table header
            var rowsMsg = i18n.ngettext("%(num)s row", "%(num)s rows", rowCount);
            var tablesInfoResult = db.exec("PRAGMA table_info(" + table + ")");
            var v = tablesInfoResult[0].values;
            // Return a table object which also contains each column info
            return {
                name: table,
                rowCount: rowCount,
                rowsMsg: rowsMsg,
                columns: v.map(function (v) {
                    return {
                        cid: v[0],
                        name: v[1],
                        type: v[2].toUpperCase(),
                        notnull: v[3],
                        dflt_value: v[4],
                        pk: v[5]
                    };
                })
            };
        });
        return tables;
    },

    /**
     * Obtains the number of rows for the specified table
     *
     * @param db The database to perform the query on
     * @param table The name of the table to query
     */
    getRowCount: function getRowCount(db, table) {
        var result = db.exec("SELECT count(*) FROM " + table);
        return result[0].values[0][0];
    },

    /**
     * Parses out each statement and calls the callback
     *
     * @param userCode the user code to parse
     * @param callback callback(statement, lineNumber)
     *     statement is the statement to execute (could span multiple lines)
     *     lineNumber is the line of code corresponding to the statement
     *     return false from the callback to cancel executing
     */
    forEachStatement: function forEachStatement(userCode, callback) {

        // Implements a simple state machine by hand which will parse out
        // comments and separate on semicolons.
        var currentStatement = "";
        var lineNumber = 0;
        var state = {
            NORMAL: 1,
            ONE_DASH: 2,
            IN_SINGLE_LINE_COMMENT: 3,
            ONE_SLASH: 4,
            IN_MULTI_LINE_COMMENT: 5,
            IN_MULTI_LINE_COMMENT_PLUS_STAR: 6,
            IN_SINGLE_QUOTE_STRING: 7,
            IN_DOUBLE_QUOTE_STRING: 8
        };

        var currentState = state.NORMAL;
        for (var i = 0; i < userCode.length; i++) {
            if (userCode[i] === "\n") {
                lineNumber++;
            }
            switch (currentState) {
                case state.NORMAL:
                    if (userCode[i] === "-") {
                        currentState = state.ONE_DASH;
                        continue;
                    } else if (userCode[i] === "'") {
                        currentState = state.IN_SINGLE_QUOTE_STRING;
                    } else if (userCode[i] === "\"") {
                        currentState = state.IN_DOUBLE_QUOTE_STRING;
                    } else if (userCode[i] === "/") {
                        currentState = state.ONE_SLASH;
                        continue;
                    } else if (userCode[i] === ";") {
                        currentStatement = currentStatement.trim();
                        if (callback(currentStatement, lineNumber) === false) {
                            return;
                        }
                        currentStatement = "";
                        continue;
                    }
                    currentStatement += userCode[i];
                    break;
                case state.ONE_DASH:
                    if (userCode[i] === "-") {
                        currentState = state.IN_SINGLE_LINE_COMMENT;
                        continue;
                    }
                    currentStatement += "-" + userCode[i];
                    currentState = state.NORMAL;
                    break;
                case state.IN_SINGLE_LINE_COMMENT:
                    if (userCode[i] === "\n") {
                        currentState = state.NORMAL;
                    }
                    break;
                case state.ONE_SLASH:
                    if (userCode[i] === "*") {
                        currentState = state.IN_MULTI_LINE_COMMENT;
                        continue;
                    }
                    currentStatement += "/" + userCode[i];
                    currentState = state.NORMAL;
                    break;
                case state.IN_MULTI_LINE_COMMENT:
                    if (userCode[i] === "*") {
                        currentState = state.IN_MULTI_LINE_COMMENT_PLUS_STAR;
                        continue;
                    }
                    break;
                case state.IN_MULTI_LINE_COMMENT_PLUS_STAR:
                    if (userCode[i] === "/") {
                        currentState = state.NORMAL;
                        continue;
                    }
                    break;
                case state.IN_SINGLE_QUOTE_STRING:
                    if (userCode[i] === "'") {
                        currentState = state.NORMAL;
                    }
                    currentStatement += userCode[i];
                    break;
                case state.IN_DOUBLE_QUOTE_STRING:
                    if (userCode[i] === "\"") {
                        currentState = state.NORMAL;
                    }
                    currentStatement += userCode[i];
                    break;
                default:
                    throw "Invalid condition met when parsing code";
            }
        }

        if (currentStatement) {
            currentStatement = currentStatement.trim();
            if (currentStatement) {
                callback(currentStatement, lineNumber);
            }
        }
    },
    /**
     * Executes the results with the specified userCode
     *
     * @param db The databaes to run the code on
     * @param userCode The code to run
     * @return An array of result objects
     */
    execWithResults: function execWithResults(db, userCode) {
        var results = [];
        SQLTester.Util.forEachStatement(userCode, function (statementCode) {
            // Ignore empty statements, this should be caught be linting
            if (!statementCode) {
                return;
            }
            var result = SQLTester.Util.execSingleStatementWithResults(db, statementCode);
            if (result) {
                results.push(result);
            }
        });
        return results;
    },
    /**
     * Executes a single statement
     *
     * @param db The database to execute the statement in
     * @param statement The statement to execute
     * @return a result object or if no results returns null
     */
    execSingleStatementWithResults: function execSingleStatementWithResults(db, statementCode) {
        var stmt = db.prepare(statementCode);
        var o = { values: [] };
        while (stmt.step()) {
            if (!o.columns) {
                o.columns = stmt.getColumnNames();
            }
            // Re-map the data so that arrays never contain arrays.
            // Instead each sub-array will be nested in an object.
            // For some unknown reason, handlebars 1.0.5 doesn't like
            // arrays within arrays on Firefox.
            var rowData = stmt.get();
            if (rowData) {
                rowData = rowData.map(function (data) {
                    return { data: data };
                });
            }
            o.values.push({ result: rowData });
        }
        if (o.columns) {
            return o;
        }
        return null;
    }
};

SQLTester.prototype.testMethods = {
    /*
     * Introspect a callback to determine it's parameters and then
     * produces a constraint that contains the appropriate variables
     * and callbacks.
     *
     * This allows much terser definition of callback functions since you
     * don't have to explicitly state the parameters in a separate list.
     */
    constraint: function constraint(callback) {
        var paramText = /^function [^\(]*\(([^\)]*)\)/.exec(callback.toString())[1];
        var params = paramText.match(/[$_a-zA-z0-9]+/g);

        for (var key in params) {
            if (params[key][0] !== "$") {
                console.warn("Invalid parameter in constraint " + "(should begin with a '$'): ", params[key]);
                return null;
            }
        }
        return {
            variables: params,
            fn: callback
        };
    },

    initTemplateDB: function initTemplateDB(structure) {
        var templateDB = new SQL.Database();
        var templateResults = SQLTester.Util.execWithResults(templateDB, structure);
        var templateTables = SQLTester.Util.getTables(templateDB, true);
        templateDB.close();
        return {
            results: templateResults,
            tables: templateTables,
            userCode: structure
        };
    },

    /*
     *
     * @return {success} if the user DB has at least as many tables as
     *  the comparison DB
     */
    matchTableCount: function matchTableCount(templateDBInfo) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var tables = dbInfo.tables;
        var templateTables = templateDBInfo.tables;

        if (tables.length < templateTables.length) {
            return { success: false };
        }
        return { success: true };
    },

    /**
     * @param templateDBOrCount: Either a template DB to match rows against
     *  or an integer of the amount to match against
     * @return {success} if user table contains same # of rows
     */
    matchTableRowCount: function matchTableRowCount(templateDBOrCount) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var tables = dbInfo.tables;

        if (templateDBOrCount.tables) {
            var templateTables = templateDBOrCount.tables;
            // Make sure we have similar table info
            for (var i = 0; i < tables.length; i++) {
                var table = tables[i];
                var templateTable = templateTables[i];
                // This checks the actual row count of the whole table which
                // may be different from the result set rows.
                if (templateTable && table.rowCount !== templateTable.rowCount) {
                    return { success: false };
                }
            }
        } else {
            for (var i = 0; i < tables.length; i++) {
                var table = tables[i];
                if (table.rowCount !== templateDBOrCount) {
                    return { success: false };
                }
            }
        }
        return { success: true };
    },

    /**
     * @param templateDBOrCount: Either a template DB to match rows against
     *  or an integer of the amount to match against
     * @return {success} if user table contains same # of columns
     */
    matchTableColumnCount: function matchTableColumnCount(templateDBOrCount) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var tables = dbInfo.tables;

        if (templateDBOrCount.tables) {
            var templateTables = templateDBOrCount.tables;

            for (var i = 0; i < tables.length; i++) {
                var table = tables[i];
                var templateTable = templateTables[i];

                if (templateTable && table.columns.length !== templateTable.columns.length) {
                    return { success: false };
                }
            }
        } else {
            for (var i = 0; i < tables.length; i++) {
                var table = tables[i];
                if (table.columns.length !== templateDBOrCount) {
                    return { success: false };
                }
            }
        }

        return { success: true };
    },

    /**
     * @param templateDBInfo: A template DB to match column names
     * @return {success} if user table contains same column names
     *   Note - it could also contain other names,
     *   use matchTableColumnCount if you need to be exact.
     */
    matchTableColumnNames: function matchTableColumnNames(templateDBInfo) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var tables = dbInfo.tables;
        var templateTables = templateDBInfo.tables;

        if (!tables.length) {
            return { success: false };
        }
        for (var i = 0; i < tables.length; i++) {
            var table = tables[i];
            var tableColumns = table.columns.map(function (obj) {
                return obj.name;
            });
            var templateTable = templateTables[i];
            for (var c = 0; c < templateTable.columns.length; c++) {
                if (!tableColumns.includes(templateTable.columns[c].name)) {
                    return { success: false };
                }
            }
        }
        return { success: true };
    },

    matchResultCount: function matchResultCount(templateDBInfo) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;
        var templateResults = templateDBInfo.results;

        if (results.length !== templateResults.length) {
            return { success: false };
        }
        return { success: true };
    },

    /**
     * @param resultIndex: The index of the result to check
     * @param templateDBOrCount: Either a template DB to match rows against
     *  or an integer of the amount to match against
     */
    matchResultRowCount: function matchResultRowCount(resultIndex, templateDBOrCount) {
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;

        if (results.length < resultIndex + 1) {
            return { success: false };
        }
        if (templateDBOrCount.results && !templateDBOrCount.results[resultIndex]) {
            return { success: false };
        }

        var res = results[resultIndex];
        var targetCount;
        if (templateDBOrCount.results) {
            targetCount = templateDBOrCount.results[resultIndex].values.length;
        } else {
            targetCount = templateDBOrCount;
        }

        if (res.values.length !== targetCount) {
            return { success: false };
        }
        return { success: true };
    },

    /**
     * @param resultIndex: The index of the result to check
     * @param templateDBOrCount: Either a template DB to match columns against
     *  or an integer of the amount to match against
     */
    matchResultColumnCount: function matchResultColumnCount(resultIndex, templateDBOrCount) {
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;

        if (results.length < resultIndex + 1) {
            return { success: false };
        }
        if (templateDBOrCount.results && !templateDBOrCount.results[resultIndex]) {
            return { success: false };
        }

        var res = results[resultIndex];
        var targetCount;
        if (templateDBOrCount.results) {
            targetCount = templateDBOrCount.results[resultIndex].columns.length;
        } else {
            targetCount = templateDBOrCount;
        }

        if (res.columns.length !== targetCount) {
            return { success: false };
        }
        return { success: true };
    },

    /**
     * @param resultIndex: The index of the result to check
     * @param templateDB: The templateDB to match row values against
     */
    matchResultRowValues: function matchResultRowValues(resultIndex, templateDB, options) {
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;
        options = options || {};

        if (results.length < resultIndex + 1) {
            return { success: false };
        }
        if (templateDB.results && !templateDB.results[resultIndex]) {
            return { success: false };
        }
        var result = results[resultIndex];
        var templateResult = templateDB.results[resultIndex];
        if (options.ignoreOrder) {
            // To compare rows while ignoring order,
            // we stringify each row and sort the array of rows,
            // then do an equality check.
            var resultStringified = result.values.map(function (value) {
                return JSON.stringify(value);
            }).sort();
            var templateStringified = templateResult.values.map(function (value) {
                return JSON.stringify(value);
            }).sort();
            if (!_.isEqual(resultStringified, templateStringified)) {
                return { success: false };
            }
        } else {
            for (var i = 0; i < result.values.length; i++) {
                if (!_.isEqual(result.values[i], templateResult.values[i])) {
                    return { success: false };
                }
            }
        }

        return { success: true };
    },

    /**
     * @param resultIndex: The index of the result to check
     * @param templateDB: The templateDB to match column names against
     */
    matchResultColumnNames: function matchResultColumnNames(resultIndex, templateDB) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;
        var templateResults = templateDB.results;

        if (results.length < templateResults.length) {
            return { success: false };
        }

        var result = results[resultIndex];
        var templateResult = templateResults[resultIndex];
        if (result.columns.length !== templateResult.columns.length) {
            return { success: false };
        }
        for (var c = 0; c < result.columns.length; c++) {
            var col = result.columns[c].toLowerCase().replace(/ /g, "");
            var templateCol = templateResult.columns[c].toLowerCase().replace(/ /g, "");
            if (col !== templateCol) {
                return { success: false };
            }
        }
        return { success: true };
    },

    matchResultColumns: function matchResultColumns(templateDBInfo, numResults) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;
        var templateResults = templateDBInfo.results;

        if (results.length < templateResults.length) {
            return { success: false };
        }

        // This allows us to check Step 1 results even if
        //  Step 2 results are not correct, for example.
        numResults = numResults || results.length;
        for (var i = 0; i < numResults; i++) {
            var res = results[i];
            var templateRes = templateResults[i];
            if (!templateRes || res.columns.length !== templateRes.columns.length) {
                return { success: false };
            }
            for (var c = 0; c < res.columns.length; c++) {
                var col = res.columns[c].toLowerCase().replace(/ /g, "");
                var templateCol = templateRes.columns[c].toLowerCase().replace(/ /g, "");
                if (col !== templateCol) {
                    return { success: false };
                }
            }
        }
        return { success: true };
    },

    matchResultValues: function matchResultValues(templateDBInfo, exactValues, numResults) {
        // If there were errors from linting, don't even try to match it
        if (this.errors.length) {
            return { success: false };
        }

        var dbInfo = this.userCode;
        var results = dbInfo.results;
        var templateResults = templateDBInfo.results;

        if (results.length < templateResults.length) {
            return { success: false };
        }

        // This allows us to check Step 1 results even if
        //  Step 2 results are not correct, for example.
        numResults = numResults || results.length;

        // Make sure we have similar results
        for (var i = 0; i < numResults; i++) {
            var res = results[i];
            var templateRes = templateResults[i];
            if (!templateRes || res.values.length !== templateRes.values.length) {
                return { success: false };
            }
            if (exactValues) {
                for (var r = 0; r < res.values.length; r++) {
                    // These can be objects
                    if (!_.isEqual(res.values[r], templateRes.values[r])) {
                        return { success: false };
                    }
                }
            }
        }
        return { success: true };
    },

    moreResultsThan: function moreResultsThan(num) {
        var dbInfo = this.userCode;
        var results = dbInfo.results;
        return { success: results.length > num };
    },

    /*
     * Creates a new test result (i.e. new challenge tab)
     */
    assertMatch: function assertMatch(result, description, hint, image) {

        var alternateMessage;
        var alsoMessage;

        if (result.success) {
            alternateMessage = result.message;
        } else {
            alsoMessage = result.message;
        }

        this.testContext.assert(result.success, description, "", {
            structure: hint,
            alternateMessage: alternateMessage,
            alsoMessage: alsoMessage,
            image: image
        });
    }
};
/* global SQLTester */
window.SQLOutput = Backbone.View.extend({
    initialize: function initialize(options) {
        this.config = options.config;
        this.output = options.output;
        this.externalsDir = options.externalsDir;

        this.tester = new SQLTester(options);

        this.render();

        // Load SQL config options
        this.config.runCurVersion("sql", this);

        // Register a helper to tell the difference between null and 0
        Handlebars.registerHelper("isNull", function (variable, options) {
            if (variable === null) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });
    },

    render: function render() {
        this.$el.empty();
        this.$frame = $("<iframe>").css({ width: "100%", height: "100%", border: "0" }).appendTo(this.el).show();
    },

    getDocument: function getDocument() {
        return this.$frame[0].contentWindow.document;
    },

    getScreenshot: function getScreenshot(screenshotSize, callback) {
        html2canvas(this.getDocument().body, {
            imagesDir: this.output.imagesDir,
            onrendered: function onrendered(canvas) {
                var width = screenshotSize;
                var height = screenshotSize / canvas.width * canvas.height;

                // We want to resize the image to a thumbnail,
                // which we can do by creating a temporary canvas
                var tmpCanvas = document.createElement("canvas");
                tmpCanvas.width = screenshotSize;
                tmpCanvas.height = screenshotSize;
                tmpCanvas.getContext("2d").drawImage(canvas, 0, 0, width, height);

                // Send back the screenshot data
                callback(tmpCanvas.toDataURL("image/png"));
            }
        });
    },

    /**
     * Given an SQLite error and the current statement, suggest a better
     * error message.  SQLlite error messages aren't always very descriptive,
     * this should make common syntax errors easier to understand.
     */
    getErrorMessage: function getErrorMessage(sqliteError, statement) {
        sqliteError = sqliteError || "";
        statement = statement || "";
        statement = statement.toUpperCase();

        var errorMessage = sqliteError;

        // First, we translate SQLite errors into friendly i18n-able messages

        var colTypesError = sqliteError.indexOf("valid column types") > -1;
        if (colTypesError) {
            errorMessage = i18n._("Please use one of the valid column types " + "when creating a table: ") + "\"TEXT\", \"NUMERIC\", \"INTEGER\", \"REAL\", \"NONE\".";
        }
        var uniqStr = "UNIQUE constraint failed:";
        var uniqError = sqliteError.indexOf(uniqStr) > -1;
        if (uniqError) {
            var colName = sqliteError.split(uniqStr)[1].trim();
            errorMessage = i18n._("\"UNIQUE\" constraint failed on column \"%(colName)s\".", { colName: colName });
        }
        var notNullStr = "NOT NULL constraint failed:";
        var notNullError = sqliteError.indexOf(notNullStr) > -1;
        if (notNullError) {
            var colName = sqliteError.split(notNullStr)[1].trim();
            errorMessage = i18n._("\"NOT NULL\" constraint failed on column \"%(colName)s\".", { colName: colName });
        }
        var dupColStr = "duplicate column name:";
        var dupColError = sqliteError.indexOf(dupColStr) > -1;
        if (dupColError) {
            var colName = errorMessage.split(dupColStr)[1].trim();
            errorMessage = i18n._("You have multiple columns named \"%(colName)s\" - " + "column names must be unique.", { colName: colName });
        }
        var ambColStr = "ambiguous column name:";
        var ambColError = sqliteError.indexOf(ambColStr) > -1;
        if (ambColError) {
            var colName = errorMessage.split(ambColStr)[1].trim();
            errorMessage = i18n._("Ambiguous column name \"%(colName)s\".", { colName: colName });
            // Note(danielhollas): Added a more helpful text as a separate string
            // to preserve existing translations.
            // I18N: This Oh Noes message follows "Ambiguous column name" SQL error
            errorMessage += " " + i18n._("Multiple tables that you're joining " + "contain a column with that name. Specify the name of the table that " + "contains the column, using the format \"tableName.columnName\".");
        }
        var unknownColStr = "no such column:";
        var unknownColError = sqliteError.indexOf(unknownColStr) > -1;
        if (unknownColError) {
            var colName = sqliteError.split(unknownColStr)[1].trim();
            errorMessage = i18n._("We can't find the column named \"%(colName)s\".", { colName: colName });
        }
        var noTablesError = sqliteError.indexOf("no tables specified") > -1;
        if (noTablesError) {
            errorMessage = i18n._("You didn't specify any tables for your \"SELECT\".");
        }
        // Generic syntax error messages take form: 'near \"%T\": syntax error'
        var syntaxErrStr = ": syntax error";
        var isSyntaxError = sqliteError.indexOf(syntaxErrStr) > -1;
        if (isSyntaxError) {
            var nearPhrase = errorMessage.split(syntaxErrStr)[0];
            errorMessage = i18n._("There's a syntax error near %(nearThing)s.", { nearThing: nearPhrase.substr(5) });
        }
        var colValueMismatchReg = /has (\d+) columns but (\d+) values were supplied/;
        var colMismatchError = sqliteError.match(colValueMismatchReg);
        if (colMismatchError) {
            var tableName = sqliteError.split(" ")[1];
            var numCols = colMismatchError[1];
            var numVals = colMismatchError[2];

            // I18N: The first part of "Oh noes" error in the SQL course.
            // I18N: "Table %(tableName)s has %(num)s columns"
            // I18N: "but %(num)s values were supplied."
            // I18N: You can reorder the parts in string "%(columns)s %(values)s"
            var tableHasColumns = i18n.ngettext("Table \"%(tableName)s\" has %(num)s column", "Table \"%(tableName)s\" has %(num)s columns", numCols, { tableName: tableName });

            // I18N: The second part of "Oh noes" error in the SQL course.
            // I18N: "Table %(tableName)s has %(num)s columns"
            // I18N: "but %(num)s values were supplied."
            // I18N: You can reorder the parts in string "%(columns)s %(values)s"
            var valuesSupplied = i18n.ngettext("but %(num)s value was supplied.", "but %(num)s values were supplied.", numVals);

            // I18N: Oh noes error in the SQL course.
            // I18N: %(columns)s = "Table %(tableName)s has %(num)s columns"
            // I18N: %(values)s  = "but %(num)s values were supplied."
            // I18N: The sentences are translated in two different Crowdin strings,
            // I18N: but can be reordered here
            errorMessage = i18n._("%(columns)s %(values)s", { columns: tableHasColumns, values: valuesSupplied });
        }

        // Now that we've translated the base error messages,
        // we add on additional helper messages for common mistakes
        if (unknownColError && statement.indexOf("SELECT") !== -1 && statement.indexOf("FROM") === -1) {
            errorMessage += " " + i18n._("Are you perhaps missing a \"FROM\" clause?");
        } else if (isSyntaxError && statement.indexOf("INSERT") !== -1 && statement.indexOf("VALUES") !== -1 && statement.indexOf("INTO") === -1) {
            errorMessage += " " + i18n._("Are you missing the \"INTO\" keyword?");
        } else if (isSyntaxError && statement.indexOf("INSERT") !== -1 && statement.indexOf("INTO") !== -1 && statement.indexOf("VALUES") === -1) {
            errorMessage += " " + i18n._("Are you missing the \"VALUES\" keyword?");
        } else if (statement.indexOf("INTERGER") !== -1) {
            errorMessage += " " + i18n._("Is \"INTEGER\" spelled correctly?");
        } else if (isSyntaxError && statement.indexOf("CREATE") !== -1 && statement.search(/CREATE TABLE \w+\s\w+/) > -1) {
            errorMessage += " " + i18n._("You can't have a space in your table name.");
        } else if (isSyntaxError && statement.indexOf("CREATE TABLE (") > -1) {
            errorMessage += " " + i18n._("Are you missing the table name?");
        } else if (isSyntaxError && statement.indexOf("PRIMARY KEY INTEGER") !== -1) {
            errorMessage += " " + i18n._("Perhaps you meant to put \"PRIMARY KEY\" after \"INTEGER\"?");
        } else if (isSyntaxError && statement.indexOf("(") !== -1 && statement.indexOf(")") === -1) {
            errorMessage += " " + i18n._("Are you missing a parenthesis?");
        } else if (isSyntaxError && statement.indexOf("CREATE") !== -1 && statement.indexOf("TABLE") === -1 && (statement.indexOf("INDEX") === -1 || statement.indexOf("TRIGGER") === -1 || statement.indexOf("VIEW") === -1)) {
            errorMessage += " " + i18n._("You may be missing what to create. For " + "example, \"CREATE TABLE...\"");
        } else if (isSyntaxError && statement.indexOf("UPDATE") !== -1 && statement.indexOf("SET") === -1) {
            errorMessage += " " + i18n._("Are you missing the \"SET\" keyword?");
        } else if (isSyntaxError && statement.search(/[^SUM]\s*\(.*\)\n*\s*\w+/) > -1 || statement.search(/\n+\s*SELECT/) > -1 || statement.search(/\)\n+\s*INSERT/) > -1) {
            errorMessage += " " + i18n._("Do you have a semi-colon after each statement?");
        } else if (isSyntaxError && statement.indexOf("INSERT") !== -1 && statement.search(/[^INSERT],\d*\s*[a-zA-Z]+/) > -1) {
            errorMessage += " " + i18n._("Are you missing quotes around text values?");
        } else if (isSyntaxError && statement.search(/,\s*\)/) > -1) {
            errorMessage += " " + i18n._("Do you have an extra comma?");
        } else if (isSyntaxError && statement.indexOf("INSERT,") > -1) {
            errorMessage += " " + i18n._("There shouldn't be a comma after \"INSERT\".");
        } else if (colTypesError && statement.search(/(\w+\s*,\s*((TEXT)|(INTEGER))+)/) > -1) {
            errorMessage += " " + i18n._("Do you have an extra comma between the name and type?");
        } else if (colTypesError && statement.search(/(\w+\s+\w+\s*((TEXT)|(INTEGER)|(REAL))+)/) > -1) {
            errorMessage = i18n._("You can't have a space in your column name.");
        } else if (uniqError) {
            errorMessage += " " + i18n._("Are you specifying a different value for each row?");
        }
        return errorMessage;
    },

    lint: function lint(userCode, skip) {
        // the deferred isn't required in this case, but we need to match the
        // same API as the pjs-output.js' lint method.
        var deferred = $.Deferred();
        if (skip) {
            deferred.resolve({
                errors: [],
                warnings: []
            });
            return deferred;
        }

        if (!window.SQLOutput.isSupported()) {
            deferred.resolve({
                errors: [{
                    row: -1,
                    column: -1,
                    text: i18n._("Your browser is not recent enough to show " + "SQL output. Please upgrade your browser."),
                    type: "error",
                    source: "sqlite",
                    lint: undefined,
                    priority: 2
                }],
                warnings: []
            });
            return deferred;
        }

        // To lint we execute each statement in an isolated environment.
        // We also test for foreign key constraints being violated after
        // each statement so we can give proper line numbers to the user
        // if anything is violated.
        var error;
        var db = new SQL.Database();
        var results = [];
        SQLTester.Util.forEachStatement(userCode, (function (statement, lineNumber) {
            try {
                if (!statement) {
                    throw new Error(i18n._("It looks like you have an " + "unnecessary semicolon."));
                }
                var result = SQLTester.Util.execSingleStatementWithResults(db, statement);
                if (result) {
                    results.push(result);
                }

                // SQLite allows any column type name and uses these rules
                // to determine the storage type:
                // https://www.sqlite.org/datatype3.html
                // Instead it would be better for learning purposes to require
                // the valid names that things coerce to.
                var tables = SQLTester.Util.getTables(db);
                tables.forEach(function (table) {
                    table.columns.forEach(function (column) {
                        var type = column.type.toUpperCase();
                        var allowedTypes = ["TEXT", "NUMERIC", "INTEGER", "REAL", "NONE"];
                        if (allowedTypes.indexOf(type) === -1) {
                            throw new Error(i18n._("Please use one of the valid column " + "types when creating a table: ") + allowedTypes.join(", "));
                        }
                    });
                });

                // Check if we have any new foreign key constraint violations
                var fkResults = db.exec("PRAGMA foreign_key_check;");
                if (fkResults.length > 0) {
                    var result = fkResults[0];
                    throw new Error("Please check for a foreign key constraint " + "on table " + result.values[0][0] + " for parent table " + result.values[0][2]);
                }

                // Check if we have any new integrity errors such as NOT NULL
                // vilolations
                var integrityResults = db.exec("PRAGMA integrity_check(1);");
                var result = integrityResults[0];
                if (result.values[0][0] !== "ok") {
                    throw new Error("Integrity error: " + result.values[0][0]);
                }

                return true;
            } catch (e) {
                error = true;
                deferred.resolve({
                    errors: [{
                        row: lineNumber,
                        column: 0,
                        text: this.getErrorMessage(e.message, statement),
                        type: "error",
                        source: "sqlite",
                        lint: undefined,
                        priority: 2
                    }],
                    warnings: []
                });
                return false;
            }
        }).bind(this));

        var tables = SQLTester.Util.getTables(db);
        db.close();

        this.dbInfo = {
            tables: tables,
            results: results,
            userCode: userCode
        };

        if (!error) {
            deferred.resolve({
                errors: [],
                warnings: []
            });
        }

        return deferred;
    },

    initTests: function initTests(validate) {
        if (!validate) {
            return;
        }

        try {
            var code = "with(arguments[0]){\n" + validate + "\n}";
            new Function(code).apply({}, this.tester.testContext);
        } catch (e) {
            return e;
        }
    },

    test: function test(userCode, tests, errors, callback) {
        var errorCount = errors.length;

        this.tester.test(this.dbInfo, tests, errors, (function (errors, testResults) {
            if (errorCount !== errors.length) {
                // Note: Scratchpad challenge checks against the exact
                // translated text "A critical problem occurred..." to
                // figure out whether we hit this case.
                var message = i18n._("Error: %(message)s", { message: errors[errors.length - 1].message });
                console.warn(message);
                this.tester.testContext.assert(false, message, i18n._("A critical problem occurred in your program " + "making it unable to run."));
            }

            callback(errors, testResults);
        }).bind(this));
    },

    postProcessing: function postProcessing() {
        var doc = this.getDocument();
        var self = this;
        $(doc).find("table.sql-schema-table").each(function () {
            var tableName = $(this).data("table-name");
            $(this).find("th a").click(function () {
                self.output.postParent({
                    action: "sql-table-click",
                    table: tableName
                });
            });
        });
    },

    runCode: function runCode(userCode, callback) {
        if (!window.SQLOutput.isSupported()) {
            return callback([], userCode);
        }

        var db = new SQL.Database();

        var results = SQLTester.Util.execWithResults(db, userCode);
        var tables = SQLTester.Util.getTables(db);
        db.close();

        var output = Handlebars.templates["sql-results"]({
            tables: tables,
            results: results,
            databaseMsg: i18n._("Database Schema"),
            resultsMsg: i18n._("Query results")
        });

        var doc = this.getDocument();
        doc.open();
        doc.write(output);
        doc.close();

        // If a new result set was added, scroll to the bottom
        if (results && results.length) {
            // Ignore the first time the scratchpad loads
            if (window.SQLOutput.lastResultsLen !== undefined) {
                $(doc).scrollTop($(doc).height());
            }
            window.SQLOutput.lastResultsLen = results.length;
        }

        this.postProcessing();

        callback([], userCode);
    },

    clear: function clear() {},

    kill: function kill() {}
});

window.SQLOutput.isSupported = function () {
    // Check to make sure the typed arrays dependency is supported.
    return "Uint8ClampedArray" in window;
};

LiveEditorOutput.registerOutput("sql", SQLOutput);

// Clear the output

// Completely stop and clear the output

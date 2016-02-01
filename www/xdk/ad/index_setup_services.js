var data_views   = { group:[], single:[], bindings:{}};

















data_views.group.push({"model":{"title":null,"year":null,"mpaa_rating":null,"posters.thumbnail":null},"child":".uib_w_16","parent":".uib_w_12"});











data_views.group.push({"model":{"title":null,"year":null,"mpaa_rating":null,"synopsis":null,"posters.thumbnail":null},"child":".uib_w_21","parent":".uib_w_17"});










data_views.group.push({"model":{"title":null,"year":null,"mpaa_rating":null,"synopsis":null,"posters.thumbnail":null},"child":".uib_w_26","parent":".uib_w_22"});














data_views.group.push({"model":{"title":null,"year":null,"mpaa_rating":null,"synopsis":null,"posters.thumbnail":null},"child":".uib_w_31","parent":".uib_w_27"});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_16", "intel.xdk.services.rottentomatoesbox_office", ["movies"], "standard-list", data_views);

data_support.prepare_mvc(".uib_w_21", "intel.xdk.services.rottentomatoesnow_showing", ["movies"], "standard-list", data_views);

data_support.prepare_mvc(".uib_w_26", "intel.xdk.services.rottentomatoesupcoming", ["movies"], "standard-list", data_views);

data_support.prepare_mvc(".uib_w_31", "intel.xdk.services.rottentomatoesin_theatres", ["movies"], "standard-list", data_views);

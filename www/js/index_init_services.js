/*global data_support, intel */

/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */


data_support.ready(intel.xdk.services.rottentomatoesbox_office.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.rottentomatoesnow_showing.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.rottentomatoesupcoming.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.rottentomatoesin_theatres.bind(null, {"xdkFilter":null}));
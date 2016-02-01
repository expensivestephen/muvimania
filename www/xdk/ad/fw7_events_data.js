/*global data_event_handlers */
(function()
 {
     "use strict";
     data_event_handlers.on_data_proplist["standard-list"] = function(selector)
                                                            {
                                                                return function(data)
                                                                {
                                                                  var swiperNode = $(selector).parents(".swiper-init")[0];
                                                                  if(swiperNode && swiperNode.swiper){ swiperNode.swiper.init(); }
                                                                };
                                                            };


 })();

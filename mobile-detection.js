//mobile detection
      var sniffer=new Object();
      var agentNow=navigator.userAgent.toLowerCase();
      sniffer.android=(agentNow.search("android")>=0);
      sniffer.series60=(agentNow.search("series60")>=0);
      sniffer.iphone=(agentNow.search("iphone")>=0);
      sniffer.blackberry=(agentNow.search("blackberry")>=0);
      sniffer.windowsce=(agentNow.search("windowsce")>=0);
      for(var mobile in sniffer)
      {
        if(sniffer[mobile])
        {
          window.location = "mobile.html";
        } 
      }

window.watsonAssistantChatOptions = {
    integrationID: "d17516da-3af2-4c5a-bd15-36f16b67fb0b",
    region: "au-syd",
    serviceInstanceID: "63fa02bf-3ab6-46e4-8e1f-09516ab4c0e4",
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
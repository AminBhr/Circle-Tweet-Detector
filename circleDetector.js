window.addEventListener("scroll", function() {
    // Detect which tweets have disabled action elements (Reply, Retweet, Like, or Analytics)
       const elements = document.getElementsByClassName('r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-12c3ph5 r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi')
       for (let i = 0; i < elements.length; i++) {
           const element = elements[i];
 
           // Detect if the disabled action is Analytics or not
           const pathElement = element.querySelector('path[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]');
      
           if (pathElement) {
              const articleElement = pathElement.closest('article');
              articleElement.style.borderRight = "5px solid rgb(0, 186, 124)";
              articleElement.style.borderLeft = "5px solid rgb(0, 186, 124)";
        }
    }
  });

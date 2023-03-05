import nav from "./nav.js";

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
         <a class="list-group-item" href="/">
           <i class="fab fa-twitter"></i>
         </a>
         ${nav.map((navItem) => `
               <a href=${navItem.link} class=${`"list-group-item list-group-item-action ${navItem.title === active ? "active" : ""}"`}>
                   <span ${navItem.icons.length > 1 ? `class = "fa-stack"` : ""}>
                      ${navItem.icons.map((icon) => `<i class="${icon}"}></i>`).join("")}
                   </span>
                   <span class="d-none d-xl-inline">${navItem.title}</span>
               </a> `
        ).join(``)} 

       <div class="d-grid mt-1 tweetbox">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
      </div>
  </div>
 `);
}

export default NavigationSidebar;
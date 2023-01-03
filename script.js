const tweetContainer = document.querySelector(".twitter")

let data;

async function getTweets() {
    try {
    
  
      const response = await fetch('twitter.json', );
       data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    showTweets(data)
  }

  getTweets()

  const showTweets = async(tweets)=>{
    const template = `
    <div class="tweet">
      <div class="tweet-header">
      <img src="${tweets.user.avatar_url}" alt="${tweets.user.name}" />
        <h3>${tweets.user.name}</h3>
        <p>@${tweets.user.username}</p>
      </div>
      <div class="tweet-body">
        <p>${tweets.text}</p>
        <img src="${tweets.text_img}" alt="${tweets.user.name}" />
      </div>
      <div class="tweet-footer">
        <p>${tweets.created_at}</p>
        <p>${tweets.retweet_count} Retweets</p>
      </div>
    </div>
  `;

 


  tweetContainer.innerHTML = template;
  }
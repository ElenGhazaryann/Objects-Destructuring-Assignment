"use strict";
function getVoteCount({ upvotes, downvotes }) {
  return upvotes - downvotes;
}
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

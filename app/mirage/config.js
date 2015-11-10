export default function() {

  this.get('/topics', function(db) {
      return {
        topics: db.topics
      };
  });

  this.post('/topics', function(db, req) {
      let attrs = JSON.parse(req.reqBody);
      let topic = db.topics.insert(attrs);
      return {
        data: {
          name: topic.name,
          id: topic.id,
          instant_answer_topics: topic.instant_answer_topics
        }
      };
  });

  this.patch('/topics/:id', function(db, req) {
      let attrs = JSON.parse(req.reqBody);
      let topic = db.topics.update(attrs.data.id, attrs.data.attributes);
      return {
        data: {
          name: topic.name,
          id: topic.id,
          instant_answer_topics: topic.instant_answer_topics
        }
      };
  });

  this.del('/topics/:id');

}

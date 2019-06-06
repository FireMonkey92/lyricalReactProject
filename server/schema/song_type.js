const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList } = graphql;
const LyricType = require('./lyric_type');

const SongModel = mongoose.model('song');

const SongType = new GraphQLObjectType({
  name: 'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      // BCZ of songs are in array 
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        // find song from the model
        return SongModel.findLyrics(parentValue.id);
      }
    }
  })
});

module.exports = SongType;

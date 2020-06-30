cube(`Netflix`, {
  sql: `SELECT * FROM public.netflix`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [showId, dateAdded]
    },
    
    totalCount: {
      type: `count`,
      sql: 'show_type',
      drillMembers: [country, showType, dateAdded]
    },

    movieCount: {
      sql: `show_type`,
      type: `count`,
      filters: [
        { sql: `${CUBE}.show_type = 'Movie'` }
      ]
    },

    tvShowCount: {
      sql: `show_type`,
      type: `count`,
      filters: [
        { sql: `${CUBE}.show_type = 'TV Show'` }
      ]
    }

  },
  
  dimensions: {
    showId: {
      sql: `show_id`,
      type: `number`,
      primaryKey: true
    },

    country: {
      sql: `country`,
      type: `string`
    },
    
    showType: {
      sql: `show_type`,
      type: `string`
    },
    
    listedIn: {
      sql: `listed_in`,
      type: `string`
    },

    rating: {
      sql: `rating`,
      type: `string`
    },
    
    dateAdded: {
      sql: `date_added`,
      type: `time`
    }
  }
});

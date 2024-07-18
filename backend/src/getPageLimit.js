function getPageLimit(arrLength, page, limit) {
  const result = {
    allPages: 1,
    page: 1,
    limit: {
      start: 0,
      end: limit,
    },
  };

  if (arrLength <= limit) return result;

  result.allPages = Math.ceil(arrLength / limit);

  if (page > result.allPages) {
    result.page = result.allPages;
    result.limit.start = result.page * limit - limit;
    return result;
  }
  result.page = page;
  result.limit.start = result.page * limit - limit;

  return result;
}

module.exports = { getPageLimit };

const setUserId = (object, userId, action) => {
  const data = { ...object };
  if (action === 'created') {
    data.createdBy = userId;
  }
  data.updatedBy = userId;
  return data;
};

const addCurrentUser = (data, userId, action) => {
  let newData = null;
  if (Array.isArray(data)) {
    newData = data.map(function (element) {
      let object = { ...element };
      object = setUserId(element, userId, action);
      return object;
    });
    if (newData.length === data.length) {
      return newData;
    }
  } else {
    newData = { ...data };
    newData = setUserId({ ...data }, userId, action);
    return newData;
  }
};

module.exports = addCurrentUser;

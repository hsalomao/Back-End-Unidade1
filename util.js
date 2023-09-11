const isValidDate = (dateString) => {
    let pattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    return pattern.test(dateString);
  }

module.exports = { isValidDate }
/*
* List of mock API
*
*
*
*/
const apiHome = 'https://da0e0cf5-e268-4982-a6c2-7f25b198944d.mock.pstmn.io';

const apis = {
  apiHome: apiHome,
  400: apiHome + '/' + 'error400',
  401: apiHome + '/' + 'error401',
  500: apiHome + '/' + 'error500',
};

$(document).ready(onDocReady);

/**
 * Executes when the document/DOM is ready.
 * @param {null} Null
 */
function onDocReady() {
  $.ajax({
    url: apis.apiHome,
  }).then(ajaxSuccess)
      .catch(ajaxError);

  // $.ajax({
  //   url: apis[401]
  // });

  // $.ajax({
  //   url: apis[400]
  // });

  $.ajax({
    url: apis[500],
  });
}

/**
 * Handles a few things on AJAX success.
 * @param {Object} data
 */
function ajaxSuccess(data) {
  console.log('Local AJAX Success Handler: ', data);
}

/**
 * Handles a few things on AJAX success.
 * @param {null} Null
 */
function ajaxError() {
  console.error('Local AJAX Error Handler!');
}

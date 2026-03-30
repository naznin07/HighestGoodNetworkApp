import React from 'react';
import QuestionPage from './QuestionPage.jsx';
import { ENDPOINTS } from '../../../utils/URL';

const fieldNameMapFollowup = ['followup_Overall', 'followup_Feedback', 'followup_Improvements'];
function FollowupQuestions() {
  return (
    <QuestionPage
      pageNumber={5}
      title="Followup"
      fieldNameMap={fieldNameMapFollowup}
      nextPage="/hgnForm/page6"
      backpage="/hgnForm/page4"
      ENDPOINTS={ENDPOINTS}
    />
  );
}
export default FollowupQuestions;

import React from 'react';
import QuestionPage  from './QuestionPage';

 const fieldNameMapBackend = [
   'backend_Overall',
   'backend_Database',
   'backend_MongoDB',
   'backend_MongoDB_Advanced',
   'backend_TestDrivenDev',
   'backend_Deployment',
   'backend_VersionControl',
   'backend_CodeReview',
   'backend_EnvironmentSetup',
   'backend_AdvancedCoding',
   'backend_AgileDevelopment',
 ];
 function BackendQuestions(){
  return <QuestionPage pageNumber={4} title="Backend" fieldNameMap={fieldNameMapBackend} nextPage="/hgnForm/page5" />;
 }
export default BackendQuestions;
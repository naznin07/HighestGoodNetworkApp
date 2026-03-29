
import React from 'react';
import { FaEdit, FaRegSave } from 'react-icons/fa';
import styles from '../styles/FrontendBackendQuestions.module.css';
import { getFontColor } from '../../../styles';

function QuestionItem({
  question,
  index,
  fieldName,
  editedText,
  setEditedText,
  editingIndex,
  setEditingIndex,
  handleSaveClick,
  handleRadioChange,
  newVolunteer,
  darkMode,
  isOwner,
  searchQuestion,
}) {
  return (
    <div className={styles.frontendBackend}>
      <div className={styles.questionContainer}>
        {editingIndex === index && isOwner ? (
          <div className={`${styles.editQuestionContainer} ${darkMode ? 'bg-yinmn-blue' : ''}`}>
            <p className={`${styles.editTitle} ${getFontColor(darkMode)}`}>Edit Question</p>
            <div className={styles.editQuestion}>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className={`${styles.editInput} ${getFontColor(darkMode)} ${
                  darkMode ? 'bg-space-cadet' : ''
                }`}
              />
              <FaRegSave
                title="Save"
                className={styles.saveIcon}
                onClick={() => handleSaveClick(index)}
              />
            </div>
          </div>
        ) : (
          <p className={`${styles.question} ${getFontColor(darkMode)}`}>
            {searchQuestion(3, index + 1)}
            {isOwner && (
              <FaEdit
                className={styles.editIcon}
                onClick={() => setEditingIndex(index)}
                title="Edit"
              />
            )}
          </p>
        )}
      </div>
      <div className={styles.frontendBackendRating}>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i}>
            <label htmlFor={`${fieldName}_${i + 1}`} className={getFontColor(darkMode)}>
              {i + 1}
            </label>
            <input
              type="radio"
              name={fieldName}
              id={`${fieldName}_${i + 1}`}
              value={i + 1}
              onChange={handleRadioChange}
              checked={newVolunteer[fieldName] === String(i + 1)}
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionItem;

import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {submitGuess, restartGameAction, auralUpdate, guessFeedback} from '../actions';

export default function Game(props){
    return (
      <div>
        <Header/>
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
}

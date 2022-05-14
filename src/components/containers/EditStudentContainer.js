//import Header from './Header';

import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';
import { fetchStudentThunk } from "../../store/thunks";

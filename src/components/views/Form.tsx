
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";

import React, { useState } from "react"
import PersonData from "../models/PersonData"
import FormViewModel from "../viewmodels/FormViewModel"
import SendIcon from '@mui/icons-material/Send'


//Styles => 
import gridStyles from "../../styles/form_style/GridStyle"
import textFieldsStyle from "../../styles/form_style/TextFieldsStyle"
import radioGenderStyle from "../../styles/form_style/GenderRadioStyle"
import labelTextFormStyle from "../../styles/form_style/LabelFormStyle"
import radioEffectStyle from "../../styles/form_style/RadioEffectStyle"

const Form = () => {
    //Form Data =>
    const [name, setName] = useState<String>('')
    const [lastname, setLastname] = useState<String>('')
    const [age, setAge] = useState<Number>(0)
    const [pass, setPass] = useState<String>('')
    const [gender, setGender] = useState<String>('female')
    //This validate inputs in form => 
    const [validationName, setValidationName] = useState<String>('')
    const [validationLastname, setValidationLastname] = useState<String>('')
    const [validationAge, setValidationAge] = useState<String>('')
    const [validationPass, setValidationPass] = useState<String>('')

    const viewModel = FormViewModel.getInstance()

    const styleGrid = gridStyles()
    const styleFieldText = textFieldsStyle()
    const styleRadioGender = radioGenderStyle()
    const styleLabelForm = labelTextFormStyle()
    const styleRadioEffect = radioEffectStyle()

    const sendForm = (e: any) => {
        if (name === '' || lastname === '' || age === 0) {
            alert('There are fields empty')
        } else {
            //const arrayPerson = [new PersonData(name, lastname, age, pass, gender)]

          //  localStorage.setItem('arrayPerson', JSON.stringify(arrayPerson))

            //viewModel.addItem(new PersonData(name, lastname, age, pass, gender))
        }
    }

    const onRadioChange = (e: any) => {
        setGender(e.target.value)
    }

    const rExpNormal: RegExp = new RegExp("^[aA-zZ]{0,}$")
    const rExpAge: RegExp = new RegExp("^[0-9]{0,3}$")
    const rExpPassword: RegExp = new RegExp("(?=.*[A-Z])")

    return (
        <div>
            <Grid container className={styleGrid.root}>
                <TextField className={styleFieldText.root} focused id="outlined" label="Name" helperText={validationName} autoComplete='off' onChange={(e) => {
                    if (!rExpNormal.test(e.target.value) && e.target.value !== '') {
                        setValidationName('Null values and numbers are not allowed')
                        e.target.value = ''
                    } else {
                        console.log('Correct')
                        setValidationName('')
                        setName(e.target.value)
                    }
                }} />
                <br></br>
                <TextField id="outlined" focused label="Lastname" helperText={validationLastname} autoComplete='off' onChange={(e) => {
                    if (!rExpNormal.test(e.target.value) && e.target.value !== '') {
                        setValidationLastname('Null values and numbers are not allowed')
                        e.target.value = ''
                    } else {
                        console.log('Correct')
                        setValidationLastname('')
                        setLastname(e.target.value)
                    }
                }} />
                <br></br>
                <TextField id="outlined" focused label="Age" helperText={validationAge} autoComplete='off' onChange={(e) => {
                    if ((!rExpAge.test(e.target.value)) && (e.target.value !== '')) {
                        setValidationAge('Only numeric values are allowed or max 3 numbers')
                        e.target.value = ''
                    } else {
                        setValidationAge('')
                        setAge(Number(e.target.value))
                    }
                }} />
                <br></br>
                <TextField
                    id="outlined-password-input"
                    focused
                    label="Password"
                    type="password"
                    helperText={validationPass}
                    autoComplete="current-password" onChange={(e) => {
                        if (!rExpPassword.test(e.target.value) && e.target.value !== '') {
                            setValidationPass('The string must contain at least 1 uppercase alphabetical character')
                            e.target.value = ''
                        } else {
                            setValidationPass('')
                            setPass(e.target.value)
                        }
                    }} />
                <br></br>
                <FormLabel id="demo-radio-buttons-group-label" className={styleLabelForm.formLabel}>Gender</FormLabel>
                <FormControl color="primary">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={gender}
                        name="radio-buttons-group"
                        className={styleRadioGender.root}>
                        <FormControlLabel value="female" control={<Radio className={styleRadioEffect.radio} />} checked={gender === 'female'} onChange={onRadioChange} label="Female" />
                        <FormControlLabel value="male" control={<Radio className={styleRadioEffect.radio} />} checked={gender === 'male'} onChange={onRadioChange} label="Male" />
                        <FormControlLabel value="other" control={<Radio className={styleRadioEffect.radio} />} checked={gender === 'other'} onChange={onRadioChange} label="Other" />
                    </RadioGroup>
                    <br></br>
                    <br></br>
                    <Button onClick={sendForm} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>

                </FormControl>
            </Grid>
        </div>
    )
}
export default Form
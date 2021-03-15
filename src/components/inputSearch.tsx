import React from 'react'
import { Formik } from 'formik'
import { getMovies } from 'src/api/axios'
import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: column;
`;


const Label = styled.div`
  font-size: 22px;
  line-height: 27px;
`;

const InputArea = styled.div`
  display: flex;
  margin-bottom: 25px;
`;


const Button = styled.button`
  border: none;
  color: white;
  font-family: Helvetica, Arial, Sans-Serif;
  font-size: 20px;
  text-decoration: none;
  text-shadow: -1px -1px 1px #616161;
  position: relative;
  padding: 15px 30px;
  box-shadow: 5px 5px 0 #666;
  transition: all 0.3s ease;
  margin: 0 10px 0 0;
  background-color: #9a8194;
  cursor: pointer;
  
    &:hover{
      box-shadow: 0px 0px 0 #666;
      box-shadow: 0px 0px 0 #666;
      top: 5px;
      left: 5px;
  }
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 0 10px;
    height: 22px;
`;

const Select = styled.select`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 0 10px;
    height: 30px;
`;



interface IResponse {
    setResponse: (respons: any) => void;
}

interface IErrors {
    s: string;
}

const InputSearch: React.FC<IResponse> = ({setResponse}) => {
    return(
        <Wrapper>
         <Formik
            initialValues={{ s: '', type: '', y: ''}}
            validate={values => {
                const errors: IErrors = {} as IErrors;
                if (!values.s) {
                  errors.s = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(async () => {
                    const response = await getMovies(values)
                    setResponse(response)
                  setSubmitting(false);
                }, 400);
              }}
            >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                
                <InputArea>
                  <Label>
                    Title:
                  </Label>
                  <Input
                    type="text"
                    name="s"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.s}
                  />
                {errors.s && touched.s && errors.s}
                </InputArea>
                <InputArea>
                <Label>
                    Type:
                  </Label>
                  <Select
                    name="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  >
                    <option value={''}> </option>
                    <option value={'movie'}>Movie</option>
                    <option value={'series'}>Series</option>
                    <option value={'episode'}>Episode</option>
                    </Select>
                </InputArea>
                <InputArea>
                  <Label>
                    year:
                  </Label>
                  <Input
                    type="number"
                    name="y"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.y}
                  />
                </InputArea>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Wrapper>
    )
}


export default InputSearch
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import ImgRow from '../../assets/flexbox-main-row.png';
import ImgColumn from '../../assets/flexbox-main-column.png';

export default function Flex() {
    const [direction, setDirection] = useState('row');

    const handleChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDirection((event.target as HTMLInputElement).value);
    };

    const [justify, setJustify] = useState('flex-start');

    const handleChangeJustify = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJustify((event.target as HTMLInputElement).value);
    };

    const [align, setAlign] = useState('flex-start');

    const handleChangeAlign = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlign((event.target as HTMLInputElement).value);
    };

    const [alignContent, setAlignContent] = useState('flex-start');

    const handleChangeAlignContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlignContent((event.target as HTMLInputElement).value);
    };

    const [alignSelf, setAlignSelf] = useState('flex-start');

    const handleChangeAlignSelf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlignSelf((event.target as HTMLInputElement).value);
    };

    const [wrap, setWrap] = useState('nowrap');

    const handleChangeWrap = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWrap((event.target as HTMLInputElement).value);
    };

    const [basis, setBasis] = useState('0px');

    const handleChangeBasis = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBasis((event.target as HTMLInputElement).value);
    };
    const [grow, setGrow] = useState('1');

    const handleChangeGrow = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrow((event.target as HTMLInputElement).value);
    };
    const [shrink, setShrink] = useState('1');

    const handleChangeShrink = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShrink((event.target as HTMLInputElement).value);
    };
    return (
        <div style={{ margin: 30, paddingInline: 100 }}>
            <h1>CSS Flexbox</h1>
            <h3>CSS Flexbox — это технология для создания сложных гибких макетов за счёт правильного размещения элементов на странице.</h3>
            
            <div style={{ marginBlock: 50 }}>
                <h2>Основные свойства</h2>
                <p><code>flex-direction</code> – направление главной оси</p>
                <div style={{display: 'flex', height: 350, justifyContent: 'center'}}>
                    <img src={ImgColumn} alt='column'></img>
                    <img src={ImgRow} alt="row"></img>
                </div>
                <p><code>justify-content</code> – выравнивание по главной оси</p>
                <p><code>align-items</code> – выравнивание по поперечной оси</p>

                <h2>Многострочная организация блоков</h2>
                <p><code>flex-wrap</code> - многострочная организация блоков</p>
                <p><code>flex-flow</code> – удобное сокращение для flex-direction + flex-wrap</p>
                <p><code>align-content</code> определяет то, каким образом ряды блоков будут выровнены по вертикали и как они поделят между собой все пространство</p>
            </div>
            
            <h2>Демонстрация</h2>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <FormControl>
                    <FormLabel>flex-direction:</FormLabel>
                    <RadioGroup
                        value={direction}
                        onChange={handleChangeDirection}
                    >
                        <FormControlLabel value="row" control={<Radio />} label="row" />
                        <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                        <FormControlLabel value="column" control={<Radio />} label="column" />
                        <FormControlLabel value="column-reverse" control={<Radio />} label="column-reverse" />
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>justify-content:</FormLabel>
                    <RadioGroup
                        value={justify}
                        onChange={handleChangeJustify}
                    >
                        <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                        <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                        <FormControlLabel value="center" control={<Radio />} label="center" />
                        <FormControlLabel value="space-between" control={<Radio />} label="space-between" />
                        <FormControlLabel value="space-around" control={<Radio />} label="space-around" />
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>align-items:</FormLabel>
                    <RadioGroup
                        value={align}
                        onChange={handleChangeAlign}
                    >
                        <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                        <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                        <FormControlLabel value="center" control={<Radio />} label="center" />
                        <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                        <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                    </RadioGroup>
                </FormControl>

                <FormControl color="secondary">
                    <FormLabel>flex-wrap:</FormLabel>
                    <RadioGroup
                        value={wrap}
                        onChange={handleChangeWrap}
                    >
                        <FormControlLabel value="nowrap" control={<Radio color="secondary" />} label="nowrap" />
                        <FormControlLabel value="wrap" control={<Radio color="secondary" />} label="wrap" />
                        <FormControlLabel value="wrap-reverse" control={<Radio color="secondary" />} label="wrap-reverse" />
                    </RadioGroup>
                </FormControl>

                <FormControl color="secondary">
                    <FormLabel>align-content:</FormLabel>
                    <RadioGroup
                        value={alignContent}
                        onChange={handleChangeAlignContent}
                    >
                        <FormControlLabel value="flex-start" control={<Radio color="secondary" />} label="flex-start" />
                        <FormControlLabel value="flex-end" control={<Radio color="secondary" />} label="flex-end" />
                        <FormControlLabel value="center" control={<Radio color="secondary" />} label="center" />
                        <FormControlLabel value="space-between" control={<Radio color="secondary" />} label="space-between" />
                        <FormControlLabel value="sspace-around" control={<Radio color="secondary" />} label="space-around" />
                        <FormControlLabel value="stretch" control={<Radio color="secondary" />} label="stretch" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{
                    border: '1px solid black',
                    display: 'flex',
                    borderRadius: 5,
                    alignItems: align,
                    justifyContent: justify,
                    flexDirection: direction as 'row' | 'row-reverse' | 'column' | 'column-reverse',
                    flexWrap: wrap as 'nowrap' | 'wrap' | 'wrap-reverse',
                    alignContent: alignContent,
                    minHeight: 150,
                    minWidth: 800
                }}>
                    <div className='item' style={{
                        background: '#2F4454',
                        minHeight: 40
                    }} >Начало</div>
                    <div className='item' style={{
                        background: '#2E151B',
                        color: 'white',
                        padding: 10,
                        minHeight: 20
                    }}> 1</div>
                    <div className='item' style={{
                        background: '#DA7B93',
                        color: 'white',
                        padding: 10,
                        minHeight: 10
                    }} >2</div>
                    <div className='item' style={{
                        background: '#376E6F',
                        color: 'white',
                        padding: 10,
                        minHeight: 50,
                        minWidth: 500
                    }} >3</div>
                    <div className='item' style={{
                        background: '#1C3334',
                        color: 'white',
                        padding: 10,
                        minHeight: 60
                    }} >Конец </div>

                </div>
                <div>
                    <pre>
                        <code style={{ background: 'none' }}>
                            {`
  .parent {
      display: flex;\t\t\t
      align-items: ${align};
      justify-content: ${justify};
      flex-direction: ${direction};
      flexWrap: ${wrap};
      align-content: ${alignContent};
   }
                        `}
                        </code>
                    </pre>
                </div>
            </div>
            
            <div style={{ marginBlock: 50 }}>
                <h2>Правила для дочерних элементов</h2>
            <p><code>flex-basis</code> – базовый размер отдельно взятого flex-блока</p>
            <p><code>flex-grow</code> – “жадность” отдельно взятого flex-блока</p>
                <p><code>flex-shrink</code> – фактор “сжимаемости” отдельно взятого flex-блока</p>
                <p><code>flex</code> – короткая запись для свойств flex-grow, flex-shrink и flex-basis</p>
                <p><code>align-self</code> – выравнивание отдельно взятого flex-блока по поперечной оси</p>
                </div>
            <h2>Демонстрация</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                
            <FormControl>
                <FormLabel>flex-basis:</FormLabel>
                <RadioGroup
                    value={basis}
                    onChange={handleChangeBasis}
                >
                    <FormControlLabel value="0px" control={<Radio />} label="0px" />
                    <FormControlLabel value="100px" control={<Radio />} label="100px" />
                    <FormControlLabel value="200px" control={<Radio />} label="200px" />
                </RadioGroup>
            </FormControl>
            
            <FormControl>
                <FormLabel>flex-grow:</FormLabel>
                <RadioGroup
                    value={grow}
                    onChange={handleChangeGrow}
                >
                    <FormControlLabel value="0" control={<Radio />} label="0" />
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>flex-shrink:</FormLabel>
                <RadioGroup
                    value={shrink}
                    onChange={handleChangeShrink}
                >
                    <FormControlLabel value="0.5" control={<Radio />} label="0.5" />
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel>align-self:</FormLabel>
                <RadioGroup
                    value={alignSelf}
                    onChange={handleChangeAlignSelf}
                >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                    <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                </RadioGroup>
                </FormControl>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{
                    borderRadius: 5,
                border: '1px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 50,
                minWidth: 500
            }}>
                <div className='item' style={{
                    background: '#2F4454',
                    color: 'white',
                    padding: 10,
                    flexBasis: basis,
                    flexGrow: grow,
                    flexShrink: shrink,
                }}>
                    <p>flex-grow: {grow}</p>
                    <p>flex-shrink: {shrink}</p>
                    <p>flex-basis: {basis}</p>
                </div>
                <div className='item' style={{
                    background: '#376E6F',
                    color: 'white',
                    padding: 10,
                    alignSelf: alignSelf
                }}>
                    <p>Item</p>
                </div>
                <div className='item'  style={{
                    background: '#1C3334',
                    color: 'white',
                    padding: 10,
                    minHeight: 20,
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 100
                }} >
                    <p>flex-grow: 1</p>
                    <p>flex-shrink: 1</p>
                    <p>flex-basis: 100px</p>
                </div>
                

            </div>
            <div>
                <pre>
                    <code style={{ background: 'none' }}>
                        {`
.child {
    flex-grow: ${grow};
    flex-shrink: ${shrink};
    flex-basis: ${basis};
}
                        `}
                    </code>
                </pre>
                </div>
                </div>
        </div>
    )
}
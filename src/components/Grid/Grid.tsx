import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';


export default function Grid() {
    const [columns, setColumns] = useState('repeat(3, 80px)');
    const [rows, setRows] = useState('1fr 1fr 2fr');
    const [gap, setGap] = useState('normal');
    const [area, setArea] = useState('normal');
    const [ji, setJI] = useState('stretch');
    const [ai, setAI] = useState('stretch');
    const [js, setJS] = useState('stretch');
    const [as, setAS] = useState('stretch');
    const [jc, setJC] = useState('stretch');
    const [ac, setAC] = useState('stretch');
    const [flow, setFlow] = useState('dense');

    return (
        <div style={{ margin: 30, paddingInline: 100 }}>
            <h1>CSS Grid</h1>
            <h3>CSS Grid Layout представляет собой двумерную систему сеток в CSS.</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
                gap: 10,
                marginTop: 50
            }}>
                <div>
                    <p><code>grid-template-columns</code> - определяет количество и размеры grid-колонок</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setColumns('100px 50px 100px 70px') }}>
                            100px 50px 100px 70px
                        </Button>
                        <Button onClick={() => { setColumns('50px 1fr') }}>
                            50px 1fr
                        </Button>
                        <Button onClick={() => { setColumns('repeat(3, 80px)') }}>
                            repeat(3, 80px)
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <p><code>grid-template-rows</code> - определяет количество и размеры grid-рядов</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setRows('80px 50px 80px') }}>
                            80px 50px 80px
                        </Button>
                        <Button onClick={() => { setRows('1fr 1fr 2fr') }}>
                            1fr 1fr 2fr
                        </Button>
                        <Button onClick={() => { setRows('repeat(2, 60px)') }}>
                            repeat(2, 60px)
                        </Button>
                    </ButtonGroup>
                </div>

                <div><p><code>justify-items</code> выравнивает содержимое вдоль оси строки</p>

                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setJI('start') }}>
                            start
                        </Button>
                        <Button onClick={() => { setJI('end') }}>
                            end
                        </Button>
                        <Button onClick={() => { setJI('center') }}>
                            center
                        </Button>
                        <Button onClick={() => { setJI('stretch') }}>
                            stretch
                        </Button>
                    </ButtonGroup></div>
                <div><p><code>align-items</code> выравнивает содержимое вдоль оси столбца</p>

                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setAI('start') }}>
                            start
                        </Button>
                        <Button onClick={() => { setAI('end') }}>
                            end
                        </Button>
                        <Button onClick={() => { setAI('center') }}>
                            center
                        </Button>
                        <Button onClick={() => { setAI('stretch') }}>
                            stretch
                        </Button>
                    </ButtonGroup></div>

                <div><p><code>justify-content</code> выравнивает сетку вдоль оси строки</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setJC('start') }}>
                            start
                        </Button>
                        <Button onClick={() => { setJC('end') }}>
                            end
                        </Button>
                        <Button onClick={() => { setJC('center') }}>
                            center
                        </Button>
                        <Button onClick={() => { setJC('stretch') }}>
                            stretch
                        </Button>
                        <Button onClick={() => { setJC('space-evenly') }}>
                            space-evenly
                        </Button>
                        <Button onClick={() => { setJC('space-around') }}>
                            space-around
                        </Button>
                        <Button onClick={() => { setJC('sspace-evenly') }}>
                            space-around
                        </Button>
                    </ButtonGroup></div>
                <div><p><code>align-content</code> выравнивает сетку вдоль оси колонки</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setAC('start') }}>
                            start
                        </Button>
                        <Button onClick={() => { setAC('end') }}>
                            end
                        </Button>
                        <Button onClick={() => { setAC('center') }}>
                            center
                        </Button>
                        <Button onClick={() => { setAC('stretch') }}>
                            stretch
                        </Button>
                        <Button onClick={() => { setAC('space-evenly') }}>
                            space-evenly
                        </Button>
                        <Button onClick={() => { setAC('space-around') }}>
                            space-around
                        </Button>
                        <Button onClick={() => { setAC('sspace-evenly') }}>
                            space-around
                        </Button>
                    </ButtonGroup></div>
                <div>
                    <p><code>grid-auto-flow</code> управляет тем, как работает алгоритм автоматического размещения, точно указывая, как элементы попадают в сетку</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setFlow('row') }}>
                            row
                        </Button>
                        <Button onClick={() => { setFlow('column') }}>
                            column
                        </Button>
                        <Button onClick={() => { setFlow('dense') }}>
                            dense
                        </Button>
                    </ButtonGroup>
                </div>
                <div><p><code>gap</code> -  задаёт отступы между столбцами и строками, а не вдоль края контейнера сетки. Является сокращением для свойств row-gap и column-gap</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setGap('5px') }}>
                            5px
                        </Button>
                        <Button onClick={() => { setGap('5px 20px') }}>
                            5px 20px
                        </Button>
                        <Button onClick={() => { setGap('5%') }}>
                            5%
                        </Button>
                        <Button onClick={() => { setGap('1em') }}>
                            1em
                        </Button>
                        <Button onClick={() => { setGap('calc(5% + 5px)') }}>
                            calc(5% + 5px)
                        </Button>
                        <Button onClick={() => { setGap('normal') }}>
                            normal
                        </Button>
                    </ButtonGroup></div>
                <div><p><code>justify-self</code> выравнивает содержимое вдоль оси строки</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setJS('start') }}>
                            start
                        </Button>
                        <Button onClick={() => { setJS('end') }}>
                            end
                        </Button>
                        <Button onClick={() => { setJS('center') }}>
                            center
                        </Button>
                        <Button onClick={() => { setJS('stretch') }}>
                            stretch
                        </Button>
                    </ButtonGroup></div>
                <div><p><code>align-self</code> выравнивает содержимое вдоль оси столбца</p>
                    <ButtonGroup size='small' variant="outlined">
                        <Button onClick={() => { setAS('start') }}>
                            start
                        </Button>
                        <Button onClick={() => { setAS('end') }}>
                            end
                        </Button>
                        <Button onClick={() => { setAS('center') }}>
                            center
                        </Button>
                        <Button onClick={() => { setAS('stretch') }}>
                            stretch
                        </Button>
                    </ButtonGroup></div>
            </div>

            <div style={{
                marginBlock: 10,
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'grid',padding: 10,
                    border: '1px solid black',
                    borderRadius: 5,
                    height: 300,
                    width: 300,
                gridTemplateColumns: columns,
                gridTemplateRows: rows,
                gap: gap,
                    justifyItems: ji,
                    alignItems: ai,
                    justifyContent: jc,
                    alignContent: ac,
                gridAutoFlow: flow,
            }}>
                    <div className='item' style={{
                        background: '#376E6F',
                        margin: 1,
                        justifySelf: js,
                        alignSelf: as,
                    }} >1</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >2</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >3</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >4</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >5</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >6</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >7</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >8</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                    }} >9</div>
                </div>
                <div style={{ marginLeft: 50 }}><pre>
                    <code style={{ background: 'none' }}>
                        {`
.parent {
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    gap: ${gap};
    justify-items: ${ji};
    aling-items: ${ai};
    justify-content: ${jc};
    aling-content: ${ac};
    grid-auto-flow: ${flow};
}
                        `}</code>
                </pre></div>
                <div style={{ marginLeft: 50 }}><pre>
                    <code style={{ background: 'none' }}>
                        {`
.child {
    justify-self: ${js};
    aling-self: ${as};
}
                        `}</code>
                </pre></div>
            </div>

            <p><code>grid-template-areas</code> создаёт grid-области путём размещения именованных ячеек в грид-раскладке</p>
            <p>Применяется ко всем элементам.</p>
            <ButtonGroup size='small'variant="outlined">
                <Button onClick={() => { setArea('"a a a" "b c c" "b c c"') }}>
                    "a a a" "b c c" "b c c"
                </Button>
                <Button onClick={() => { setArea('"b b a" "b b c" "b b c"') }}>
                    "b b a" "b b c" "b b c"
                </Button>
                <Button onClick={() => { setArea('"a a ." ". b b" "c c ."') }}>
                    "a a ." ". b b" "c c ."
                </Button>
            </ButtonGroup>

            <div style={{
                marginBlock: 10,
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <div style={{
                    border: '1px solid black',
                    borderRadius: 5,
                padding: 10,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                display: 'grid',
                gridTemplateAreas: area,
            }}>
                    <div className='item' style={{
                        background: '#376E6F',
                        margin: 1,
                        gridArea: 'a'
                    }} >A</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,

                        gridArea: 'b'
                    }} >B</div>
                    <div className='item' style={{
                        background: '#376E6F', margin: 1,
                        gridArea: 'c'
                    }} >C</div>
                </div>
                
                </div>
                <div style={{ marginLeft: 50 }}><pre>
                    <code style={{ background: 'none' }}>
                        {`
                        .parent {
                             display: grid;
                             grid-template-areas: ${area};
                        }
                        `}</code>
                </pre></div>
            </div>


        </div>
    )
}
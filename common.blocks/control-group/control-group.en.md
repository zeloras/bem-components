# control-group

`control-group` block is a wrapper for blocks visual grouping. The blocks which needs grouping should be placed to block's BEMJSON declaration `content` field.

Block is implemented with CSS technology and provides no additional functionality. *Normal* theme is required for nested blocks.

As a result of template application a `control-group` block renders to `<div>` HTML element.


## Control-group use cases

Block allow's to group the following blocks:

* `input` – an input field;
* `button` – a button.

For example:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'l', type : 'search' },
            val : 'Your-query',
            placeholder : 'query'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'l' },
            text : 'search'
        }
    ]
}
```


In addition you can group the blocks which contains the `input` or `button` blocks as a part of it. For example, `select` block can be included to group, because it use `button` as the control component:

 Кроме того, можно группировать блоки, использующие `input` или `button`, как один из компонентов. Например, в группу можно включить блок `select`, управляющим компонентом для которого служит блок `button`: 

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'price from'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'to'
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'normal', size : 'm' },
            options : [
                { val : 'usd', text : '$', checked : true },
                { val : 'euro', text : '€' }
            ]
        }
    ]
}
```

The following blocks using `button` block in it's implementation can be grouped:
Могут быть сгруппированы следующие блоки, использующие в качестве компонента блок `button`:

* `select`;
* `dropdown` (with `dropdown_switcher_button` modifier set);
* `checkbox` (with `checkbox_type_button` modifier set);
* `radio` (with `radio_type_button` modifier set).


## `control-group` influence to blocks

### `input`

For all grouped `input` blocks, except the last one, will not be displayed the right border (`right` CSS property will be set to zero for the pseudo element `:before`). The last block will have 1px right border.

For example:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', type : 'search' },
            val : 'First-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', type : 'search' },
            val : 'Second-query',
            placeholder : 'query'
        },
        {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', type : 'search' },
            val : 'Another-query',
            placeholder : 'query'
        }        
    ]
}
```


### `button`

For `button` blocks the grouping affects button conner rounding and the right gap. Button appearance depends on block's position inside the group. The first and the last elements of the group visually differs from the rest:

<table>
    <tr>
        <th>Position inside the group</th>
        <th>Conners rounding</th>
        <th>Right gap</th>
    </tr>
    <tr>
        <td>First of group</td>
        <td>Left coners is rounded</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Last of the group</td>
        <td>Right coners is rounded</td>
        <td>+</td>
    </tr>
    <tr>
        <td>Inside the group</td>
        <td>Without conners rounding</td>
        <td>-</td>
    </tr>    
</table>

For example:

```bemjson
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'First of group'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'In the middle'
        },
        {
            block : 'button',
            mods : { theme : 'normal', size : 'xl' },
            text : 'Last one'
        }
    ]
}
```

# select

A `select` block is used for different types of drop-down selection lists creation. `select` is designed based on the following blocks: [button](../../button/button.en.md), [popup](../../popup/popup.en.md), [menu](../../menu/menu.en/md) and [menu-item](../../menu-item/menu-item.en.md).

`select` is visualy represented by a button and popup list of menu-items. Mouse click opens a popup window above or below the button, depending on its position on the page (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Click outside the popup area automatically hides it (`{ autoclosable : true }`).

Drop-down list allows user to choose:

* a single value from the list (`select_mode_radio`);
* a single, multiple or none values from the list (`select_mode_check`);
* a single or none values from the list (`select_mode_radio-check`).

## Valid block's attributes

Valid block's attributes could be specified in corresponding fields of block's BEMJSON file:

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Name of a select.</td>
    </tr>
    <tr>
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>Unique identifier of a select.</td>
    </tr>
    <tr>
        <td>options</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Defines a list of menu-items. Each item has mandatory attribute <code>val</code> realized by hidden element <code>control</code>.</td>
    </tr>
    <tr>
        <td>textMaxWidth</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines the maximal width of a button from <code>select</code> block. Popup width depends on width of menu-item.</td>
    </tr>
    <tr>
        <td>optionsMaxHeight</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines the maximal height of a popup window.<br>If all menu-items are not visible, scroll becomes available.<br> If value of this attribute is not specified, the height of a popup window will be equal to menu-items quantity.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Text of a select button if any value is not chosen.<br> This attribute is available for select with following specified modifiers: <code>select_mode_check</code> and <code>select_mode_radio-check</code>.</td>
    </tr>
</table>

The other valid block's attributes could be specified in the `attrs` field in BEMJSON.

## Block's modifiers

### `_theme`

The block supports the following themes:

* simple
* normal

If a theme modifier is not specified, the custom representation of a control is available (without CSS styles applying).

See the following examples for demonstration:

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**simple**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'simple', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

**normal**

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm', focused : true },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### `_mode`



Incorporating a select field into a web page is done using the <select> tag. List values are then added to the field using the <option> tag, similar to how list items <li> are added to ordered list elements (<ol>).

By default, select fields, popularly called drop down lists, only allow the user to choose a single value. This behavior and appearance may be changed by adjusting the multiple and size attributes as demonstrated below.

With the above settings, the user is now able to select multiple values by pressing and holding the Control (ctrl) key and clicking each value.



Mandatory modifier.

Block could be represented as:

* Multiple-choice select that allows user to uncheck all values from the list (`select_mode_check`). Click on menu-item changes its value to the opposite. Checked item becomes unchecked and vise versa.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third', checked : true }
    ]
}
```

* Radio select (`select_mode_radio`) is used to allow user a single choice.
Text within the button of a `select` block depends on chosen menu-item. The first item is represented as a button text by default.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

* Single-choice select that allows user to uncheck all values from the list (`select_mode_radio-check`). Click on menu-item changes its value to the opposite. Checked item becomes unchecked and vise versa.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Select's states

#### `_focused`

`focused` modifier with `true` value is set automatically to a block when it is focused. For example by pressing `Tab` or on mouse click.

#### `_width`

`width` modifier with `available` value is used to specify select button's width depending on the width of the chosen item.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second second second second second second second second' },
        { val : 3, text : 'third' }
    ]
}
```

## Block's elements

### `__button`

A `select` block is visualy represented by a button (element `button`) that contains an icon `<i>`, realized by [icon](../icon/icon.en.md) block with mixed element `tick`. The icon is a part of select's button and its size is specified by button size. Click the button opens popup with selection list.

Select is designed based on [button](../button/button.en.md) block. The following modifiers of `button` are available for `select` block:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

## `__control`

Hidden element that is used to form menu items for selection list.

## `__menu`

`menu` element allows user to manage menu items from the selection list:

* `val` – value to be sent to a server if menu item is chosen. This attribute could contain unique modifier `{ val : { id : 1 } }`.
* `text` – name of menu item.
* `checked` – value that is assigned to menu item if it is chosen – `{ checked : true }`.
* `checkedText` – specifies text that will be represented in select's button if menu item is chosen. This attribute is available for `select` block with `check` value of `mode` modifier.
* `icon` – a graphical element (icon).

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select5',
    text : '—',
    options : [
        {
            val : { id : 1 },
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : { id : 2 },
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } },
            checked : true
        }
    ]
}
```

Menu items could be grouped by `group` element. Group name is specified by `title` attribute.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'normal', size : 'm' },
    name : 'select5',
    text : 'empty',
    options : [
        {
            group : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true },
                { val : 3, text : 'third' }
            ],
            title : 'title of group 1'
        },
        {
            group : [
                { val : 4, text : 'fourth' },
                { val : 5, text : 'fifth', checked : true },
                { val : 6, text : 'sixth', disabled : true }
            ]
        }
    ]
}
```

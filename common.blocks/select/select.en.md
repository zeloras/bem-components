# select

`select` block is used for creation of different types of popups with menu-items list for selection. `select` is based on the following blocks:

* [button](../button/button.en.md)
* [popup](../popup/popup.en.md)
* [menu](../menu/menu.en/md)
* [menu-item](../menu-item/menu-item.en.md)

`select` is visually represented by a button and popup list of menu-items. Mouse click opens popup above or below a button, depending on its position on a page (`{ directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] }`). Click outside the popup area automatically hides it (`{ autoclosable : true }`).

Drop-down list allows user to choose:

* a single value from the list ([`select_mode_radio`](#radio-select));
* a single, multiple or none values from the list ([`select_mode_check`](#multiple-choice));
* a single or none values from the list ([`select_mode_radio-check`](#single-choice)).

## Block's attributes

Block provides the following attributes that could be specified within corresponding fields of BEMJSON declaration:

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
        <td>Defines a list of <code>menu-items</code>. Each item has mandatory attribute <code>val</code> realized by hidden element <code>control</code>.</td>
    </tr>
    <tr>
        <td>textMaxWidth</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines the maximum width of a <code>button</code> from <code>select</code> block. <code>popup</code> width depends on width of <code>menu-item</code>.</td>
    </tr>
    <tr>
        <td>optionsMaxHeight</td>
        <td>
            <code>String</code>
        </td>
        <td>Defines the maximum height of a <code>popup</code>.
            <br> If all <code>menu-items</code> cannot be located within the <code>popup</code>, scroll element appears.
            <br> If value of <code>optionsMaxHeight</code> attribute is not specified, the height of a popup depends on total height of <code>menu-items</code>'.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Default text of a select button when any <code>menu-item</code> is not chosen.
            <br> This attribute is available for select with following specified modifiers: <code>select_mode_check</code> and <code>select_mode_radio-check</code>.</td>
    </tr>
</table>

All other required valid block's attributes could be specified within the `attrs` field in BEMJSON.

## Block's modifiers

### `_theme`

Block supports the following themes:

* simple
* normal (**NB!** This theme requires additional mandatory modifier [`size`](../button/button.en.md))

If a theme modifier is not specified, the [custom](#custom) representation of a control is applied (without CSS styles).

See the following examples for demonstration:

[**custom**](id:custom)

```bemjson
{
    block : 'select',
    mods : { mode : 'radio' },
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
    mods : { mode : 'radio', theme : 'simple' },
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
    mods : { mode : 'radio', theme : 'normal', size : 'm' },
    name : 'select1',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### `_mode`

Mandatory modifier.

Block could be represented as:

* [Multiple-choice](id:multiple-choice) select that allows user to uncheck all values from the list (`select_mode_check`). Click on menu-item changes its value to the opposite.

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

* [Radio select](id:radio-select) (`select_mode_radio`) is used to allow user a single choice.
Text within the button of `select` block depends on chosen menu-item. The first item is represented as a button text by default.

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

* [Single-choice](id:single-choice) select allows user to uncheck all values from the list (`select_mode_radio-check`). Click on menu-item changes its value to the opposite.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
    name : 'select3',
    text : '–',
    options : [
        { val : 1, text : 'first' },
        { val : 2, text : 'second', checked : true },
        { val : 3, text : 'third' }
    ]
}
```

### Select's states

#### `_width`

To set the ability of select button's width to fit the width of the chosen item, use `width` modifier with `available` value.

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

#### `_focused`

`focused` modifier with `true` value is set automatically to a block when it is focused. For example by pressing `Tab` or on mouse click.

## Block's elements

### `__button`

A `select` block is visually represented by a button (element `button`) that contains an icon `<i>`, realized by [icon](../icon/icon.en.md) block with mixed element `tick`. The icon is a part of select's button and its size is specified by the button size. Click the button opens popup with options.

Select is based on [button](../button/button.en.md) block. The following modifiers of `button` could be assigned to `select` block:

* `theme`
* `size`
* `focused`
* `checked`
* `disabled`

## `__menu`

`menu` element allows user to manage `menu-items` from the selection list:

* `val` – value to be sent to a server when menu-item is chosen. This attribute could contain unique identifier `{ val : { id : 1 } }`.
* `text` – name of menu-item.
* `checked` – state that is set automatically to `menu-item` on mouse click.
* `checkedText` – specifies text represented within select's button instead of chosen menu-item. This attribute is used for [multiple-choice](#multiple-choice) select.
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

## `__control`

`control` element is added to the block on template engine level and used to draw `menu-item`'s in `popup`.

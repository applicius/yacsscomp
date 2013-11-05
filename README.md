# Yet Another CSS components library

Requires jQuery 1.10+

## Stylable radio button

This library doesn't directly provide custom/styled radio buttons, 
but it alters DOM and handles state event (`checked` property), so that 
you can style those radio buttons as you want (down to IE8): see [demo](http://applicius.github.io/yacsscomp/demo/radio.html).

Initial HTML must have a matching label, 
with valid `for` attribute, after each radio to be styled, inside a form:

```html
<form ...>
  <input type="radio" id="unique_id1" name="radioGroup" />
  <label for="unique_id1">A</label>

  <input type="radio" id="unique_id2" name="radioGroup" />
  <label for="unique_id2">B</label>
</form>
```

Javascript setup:

```javascript
// At end/after document load, make them stylable
$("input[type='radio'] + label").stylableRadio()
```

It adds a `span.radio-before-label` at beginning of label, 
and `span.radio-after-label` at end; e.g:

```html
<input type="radio" id="unique_id1" name="radioGroup" />
<label for="unique_id1">
  <span class="radio-before-label"></span>
  <span class="wrapper">A</span><!-- Initial label text -->
  <span class="radio-after-label"></span>
</label>
```

When associated radio button is checked,
CSS class `radio-checked` is added to label:

```html
<label for="unique_id1" class="radio-checked">...</label>
```

Following provided classes can be used to create your own CSS rules:

* `.radio-before-label`: Span at beginning of label.
* `.radio-after-label`: Span at end of label.
* `.radio-checked`: State class, on label when associated radio is checked.
  - `.radio-checked .radio-before-label`: Beginning of checked label.
  - `.radio-checked .radio-after-label`: End of checked label

### `select()`

```javascript
$("#radio").stylableRadio("select")
```

## Stylable checkbox

This library doesn't directly provide custom/styled checkboxes, 
but it alters DOM and handles state event (`checked` property), so that 
you can style those checkboxes as you want (down to IE8): see [demo](http://applicius.github.io/yacsscomp/demo/checkbox.html).

Initial HTML must have a matching label, 
with valid `for` attribute, after each checkbox to be styled, inside a form:

```html
<form ...>
  <input type="checkbox" id="unique_id1" />
  <label for="unique_id1">A</label>

  <input type="checkbox" id="unique_id2" />
  <label for="unique_id2">B</label>
</form>
```

Javascript setup:

```javascript
// At end/after document load, make them stylable
$("input[type='checkbox'] + label").stylableCheckbox()
```

It adds a `span.checkbox-before-label` at beginning of label, 
and `span.checkbox-after-label` at end; e.g:

```html
<input type="checkbox" id="unique_id1" name="checkboxGroup" />
<label for="unique_id1">
  <span class="checkbox-before-label"></span>
  <span class="wrapper">A</span><!-- Initial label text -->
  <span class="checkbox-after-label"></span>
</label>
```

When associated checkbox is checked,
CSS class `checkbox-checked` is added to label:

```html
<label for="unique_id1" class="checkbox-checked">...</label>
```

Following provided classes can be used to create your own CSS rules:

* `.checkbox-before-label`: Span at beginning of label.
* `.checkbox-after-label`: Span at end of label.
* `.checkbox-checked`: State class, on label when associated checkbox is checked.
  - `.checkbox-checked .checkbox-before-label`: Beginning of checked label.
  - `.checkbox-checked .checkbox-after-label`: End of checked label
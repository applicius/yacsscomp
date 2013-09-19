# Yet Another CSS components library

Requires jQuery 1.10+

## Stylable radio button

This library doesn't directly provide custom/styled radio buttons, 
but it alter DOM and handle state event (`checked` property) so that 
you can style those radio as you want (down to IE8): see [demo](./radio.html).

Initial HTML must have a matching label, 
with valid `for` attribute after each radio to be styled, inside a form:

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

# Text Formatting in ContentArray

## Overview
You can now add text formatting to the `security`, `article`, and `notes` fields in your `contentArray.js` file using simple markup tags.

## Supported Formatting Tags

| Tag | Effect | Example | Result |
|-----|--------|---------|--------|
| `~i ... ~i` | Italic | `~i text ~i` | *text* |
| `~b ... ~b` | Bold | `~b text ~b` | **text** |
| `~u ... ~u` | Underline | `~u text ~u` | <u>text</u> |

## Usage Examples

### Basic Formatting
```javascript
{
    module: "Home",
    section: "Home",
    security: "~b No security required ~b",
    article: "~i Article #12345 ~i",
    notes: "This is ~u important ~u information."
}
```

### Combined Formatting
You can nest tags to combine multiple styles:
```javascript
{
    security: "This has ~b bold and ~i bold italic ~i text ~b",
    article: "~i Article ~b 12345 ~b ~i",
    notes: "You can ~b bold ~b, ~i italicize ~i, and ~u underline ~u text."
}
```

### Complex Examples
```javascript
{
    security: "~i All functions ~i require ~b no permissions ~b except ~u Switch Store ~u",
    notes: "Use ~b~i bold italic ~i~b for emphasis"
}
```

## How It Works

The `parseMarkup()` function automatically:
1. Detects markup tags in your text (`~i`, `~b`, `~u`)
2. Converts them to properly styled React components
3. Applies Tailwind CSS classes (`italic`, `font-bold`, `underline`)
4. Supports nested formatting

## Implementation

The formatting is automatically applied when using:
- `parseMarkup(text)` - Returns formatted React elements
- `<FormattedText text={text} />` - Component wrapper

Both are imported from `/src/utils/parseMarkup.jsx`

## Notes

- Always close your tags: `~b text ~b` ✅ not `~b text` ❌
- Tags must match: `~i ... ~i` ✅ not `~i ... ~b` ❌
- Supports nested tags for combined styles
- Works in all `security`, `article`, and `notes` fields

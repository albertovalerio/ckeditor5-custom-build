/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
 import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
 import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
 import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
 import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
 import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
 import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
 import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
 import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
 import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
 import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
 import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
 import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
 import Image from '@ckeditor/ckeditor5-image/src/image.js';
 import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
 import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
 import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
 import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
 import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
 import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
 import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
 import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
 import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
 import Link from '@ckeditor/ckeditor5-link/src/link.js';
 import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
 import List from '@ckeditor/ckeditor5-list/src/list.js';
 import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
 import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
 import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
 import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
 import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
 import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
 import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
 import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
 import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
 import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
 import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
 import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
 import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
 import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
 import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
 import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
 import Table from '@ckeditor/ckeditor5-table/src/table.js';
 import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
 import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
 import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
 import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
 import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
 import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js';
 
 class Editor extends ClassicEditor {}
 
 // Plugins to include in the build.
 Editor.builtinPlugins = [
	 BlockQuote,
	 Bold,
	 Code,
	 CodeBlock,
	 Essentials,
	 FontBackgroundColor,
	 FontColor,
	 FontFamily,
	 FontSize,
	 Heading,
	 HorizontalLine,
	 Image,
	 ImageCaption,
	 ImageInsert,
	 ImageResize,
	 ImageStyle,
	 ImageToolbar,
	 ImageUpload,
	 Indent,
	 IndentBlock,
	 Italic,
	 Link,
	 LinkImage,
	 List,
	 ListStyle,
	 MediaEmbed,
	 MediaEmbedToolbar,
	 Paragraph,
	 SimpleUploadAdapter,
	 SourceEditing,
	 SpecialCharacters,
	 SpecialCharactersArrows,
	 SpecialCharactersCurrency,
	 SpecialCharactersEssentials,
	 SpecialCharactersLatin,
	 SpecialCharactersMathematical,
	 SpecialCharactersText,
	 Strikethrough,
	 Subscript,
	 Superscript,
	 Table,
	 TableCaption,
	 TableCellProperties,
	 TableProperties,
	 TableToolbar,
	 Underline
 ];
 
 export default { Editor, EditorWatchdog };
 
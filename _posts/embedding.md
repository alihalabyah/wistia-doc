---
title: Embedding Video on Your Website
layout: post
category: Embedding
description: Want to add video to your website (embedding) but don't know where to start? Here's a quick guide to get you off the ground!
post_intro:
  <p>Putting video on your website is the best way to get your message across.
  The act of putting a video on your website is called <strong>embedding</strong>,
  and in this guide we'll show you how to get it done right.</p>
temper: true
---

To get started, check out this *embedding video guide*, part III of our [Wistia
Basics]({{ '/wistia-basics' | post_url }}) series.

{% wistia_embed hashed_id: g7uyjp24c6 %}

Below are the specific steps required to embed a video covered in a bit more
detail.

## Upload Your Video

{% post_image hashed_id: 'e1fe1bdde534d154ea0b2aaa73aa8224055aa483', width: 600, class: 'center' %}

Before you can embed your video, you need to upload it to your account. Haven't
done that yet? Check out our [guide to uploading]({{ '/upload-video' | post_url }})
for more info.

Once uploading is complete, Wistia transcodes several versions of your video -
perfect for serving on multiple browsers and mobile devices.  After transcoding
wraps up, your video is ready to be embedded onto your site.

## Customizing Your Video

If you want to change the player color, update the thumbnail, or change the
controls that are available on your video embed, please refer to the [customize
documentation]({{ '/customizing-your-video' | post_url }}).

## Generate the Embed Code

{% post_image hashed_id: '9f6b506677bd26f2ea10ef98b9e7a205fa1305dd', width: 600, class: 'center' %}

**Embed codes** are snippets of code pasted on your web page that are useful
for serving up content (i.e. video).  To generate the embed code for your video,
start by selecting the *&lt;/&gt; Embed & Share* option under the
<span class='action_menu'>Video Actions</span> menu.


The Embed & Share Screen is where you can make some basic changes to the look
and feel of your video presentation. If you are looking for customizations like
calls-to-action and Turnstile, [read up on customization]({{ '/customizing-your-video' | post_url }}).

### Inline Embed

{% post_image hashed_id: '2d50bbdcb6d8cbc4de46d35b008d96e74d215cbb', width: 600, class: 'center' %}

The **Inline Embed** type is the standard, video-playing-on-your-website embed
type.

The **Embed Code** box at the top contains the HTML and javascript snippet you
will place on your website to add the video. Before you copy it for pasting
into your webpage markup, review the options below.

The **Video Size** option allows you to choose the dimensions your video will
be displayed at on the page (in pixels).

The **Embed Type** option is for choosing between three basic types:

* **iframe:** the default embedding option, because it works with most website
  building applications.
* **API:** if you will be using the [Player API]({{ '/player-api' | post_url }})
  with your video, use the API option.
* **SEO:** SEO-optimized embed codes. Because of Google requirements, this
  embed code is not always as easy to use as iframe embeds.

Once you have your settings dialed in, you can *copy* the embed code at the top.

{{ "A quick note on our embeds. We use protocol relative URLs as part of our embed codes. This means they will work on SSL-enabled websites without any additional tinkering. They can look a bit funky without the `http` or `https` you might be expecting, but it can save you headaches when placing your video on your website." | note }}

### Inline Embed Advanced Options

{% post_image hashed_id: 'ea30ecdbaf3536db58a046ec8b7805ceabcef452', class: 'center' %}

Two Inline Embed advanced options:

* **Use oEmbed:** [oEmbed protocol]({{ '/oembed' | post_url }}) is a way to use
  a URL as an embed code. CMS suites like Wordpress support adding an oEmbed link
  to your site/blog post markup, and generating an embed code (hence it doesn't
  break!). To use Wistia oEmbed with Wordpress, you must have the [Wistia
  Wordpress plugin](http://wordpress.org/plugins/wistia-wordpress-oembed-plugin/) installed.
* **Use Videofoam:** If your site is built to be responsive, your videos should be too! Enabling this setting will make your videos responsive.


## Pasting your Embed Code onto Your Page

Once you have copied the embed code, the next step is to paste it into your web
page editor (which could be a CMS, blog, HTML document, etc.) This is where it
gets complicated to talk in specifics, since each website management system is
different, but here are some tips:

1. If you are using a CMS suite, make sure the settings will allow for *javascript* and will leave *HTML* alone, where possible.
2. Choose the *HTML* editor setting where possible - not the *Visual* editor.
3. Leave a line above and below your embed code, to make sure it doesn't conflict with other elements on the page.

## Styling Your Embed

### Centering Your Embedded Video

<div style="text-align: center;">
  <iframe src="//fast.wistia.net/embed/iframe/zmgfiw3ckj" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="450" height="253"></iframe>
</div>

There are several possible solutions for centering a video inside a `div` or
column in your website. The solution that works best for you will depend on the
*embed code type* you use, and the structure of your website.

For an iframe embed, your embed code normally looks *something* like this:

    <iframe src="//fast.wistia.net/embed/iframe/479268413a" width="960" height="540"></iframe>

One possible solution is to add `display: block` and `margin: 0 auto` style
attributes to the embed code, like this:

    <iframe src="//fast.wistia.net/embed/iframe/479268413a" style="display: block; margin: 0 auto;" width="960" height="540"></iframe>

Another solution for iframes is to set the `parent div` (which wraps around the
video) to `text-align: center`, like this:

{% codeblock center-text-align.html %}
<div style="text-align: center;">
  <iframe src="//fast.wistia.net/embed/iframe/479268413a" width="960" height="540"></iframe>
</div>
{% endcodeblock %}

For an API embed, the original code might look like this:

    <div id="wistia_479268413a" class="wistia_embed" style="width:960px;height:540px;">

Add the `margin: 0 auto` to the existing style settings, like this:

    <div id="wistia_479268413a" class="wistia_embed" style="margin: 0 auto;width:960px;height:540px;">

### Centering oEmbed Codes in Wordpress

For using Wordpress and oEmbed codes, first add an outer div with the style
`text-align: center;`. Then, add a second div with the style `display:
inline-block;`, as seen here:

{% codeblock center-wordpress.html %}
<div style="text-align: center;">
  <div style="display: inline-block;">

    http://dave.wistia.com/medias/mgdmzrzrm4?embedType=api&videoWidth=640

  </div>
</div>
{% endcodeblock %}


## Popover Embed

{% post_image hashed_id: 'c33b48a797eee9e15d9020b9be23d656111bbf21', class: 'center' %}

The **Popover Embed** type is the lightbox video experience. The popover embed code
creates either an image or text link. When clicked it will launch the lightbox
with your video inside.

{{ "Popover embeds cannot be used for SEO purposes, as Google will not index them." | note }}

The **Embed Code** box at the top contains the HTML and javascript snippet you
will place on your website to add the popover video link.

The **Video Size** option controls how large the video will appear inside the
lightbox.

The **Launch with** option toggles between a *thumbnail image* and a *text
link* for launching your popover video.

The **Thumbnail Size** option, when you are using an image as your popover
launch link, controls the dimensions of the thumbnail image that will appear on
your site.


### Popover Embed Advanced Options

{% post_image hashed_id: '7b8528b966fc9d722fe0452b9eafc1bd47374a0b', class: 'center' %}

Popover Embed advanced options:

* **Use oEmbed:** [oEmbed protocol]({{ '/oembed' | post_url }}) is a way to use
  a URL as an embed code. CMS suites like Wordpress support adding an oEmbed link
  to your site/blog post markup, and generating an embed code (hence it doesn't
  break!). To use Wistia oEmbed with Wordpress, you must have the [Wistia
  Wordpress plugin](http://wordpress.org/plugins/wistia-wordpress-oembed-plugin/) installed.

## Link in Email Campaign & Social Sharing

These options are covered in-depth in the [email marketing]({{ '/email-marketing' | post_url }}) and [social
sharing]({{ '/social-sharing' | post_url }}) documentation pages respectively.



## Embedded Video Stats

Now that your video is embedded on your webpage, you can use Wistia's tracking
analytics to see how your viewers are interacting with the content.

[Read up on Wistia viewing stats and analytics]({{ '/embedded-video-analytics' | post_url }}).

**If something seems fishy, you can always check out our <a href="http://status.wistia.com/">Status Page</a> for more information about what might be going on. Still no luck? Shoot us an email at support@wistia.com. We'd be more than happy to help you out!**

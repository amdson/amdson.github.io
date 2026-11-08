---
layout: default
title: Bio
permalink: /bio/
---
{% assign cv = site.data.cv %}
<div class="cv">

  <header class="cv-header">
    <h1 class="cv-name">{{ cv.name }}</h1>
    <p class="cv-contact">
      <a href="mailto:{{ cv.email }}">{{ cv.email }}</a>
      <span class="sep">|</span>
      <a href="https://github.com/{{ cv.github }}">github.com/{{ cv.github }}</a>
      <span class="sep">|</span>
      <a href="{{ cv.resume_pdf | prepend: site.baseurl }}">Resume (PDF)</a>
    </p>
  </header>

  <section class="cv-section">
    <h2>Summary</h2>
    <ul class="cv-bullets">
      {% for item in cv.summary %}<li>{{ item }}</li>{% endfor %}
    </ul>
  </section>

  <section class="cv-section">
    <h2>Education</h2>
    {% for ed in cv.education %}
    <div class="cv-entry">
      <div class="cv-row"><span class="cv-title">{{ ed.school }}</span><span class="cv-right">{{ ed.location }}</span></div>
      <div class="cv-row cv-sub"><span>{{ ed.degree }}</span><span class="cv-right">{{ ed.dates }}</span></div>
      {% if ed.detail %}<div class="cv-sub">{{ ed.detail }}</div>{% endif %}
    </div>
    {% endfor %}
  </section>

  {% for group in cv.experience %}
  <section class="cv-section">
    <h2>{{ group.heading }}</h2>
    {% for role in group.roles %}
    <div class="cv-entry">
      <div class="cv-row"><span class="cv-title">{{ role.title }}</span><span class="cv-right">{{ role.dates }}</span></div>
      <div class="cv-row cv-sub"><span>{{ role.org }}</span><span class="cv-right">{{ role.location }}</span></div>
      <ul class="cv-bullets">
        {% for b in role.bullets %}<li>{{ b }}</li>{% endfor %}
      </ul>
    </div>
    {% endfor %}
  </section>
  {% endfor %}

  <section class="cv-section">
    <h2>Publications</h2>
    <ol class="cv-pubs">
      {% for p in cv.publications %}
      <li>{{ p.authors }} {% if p.doi %}<a href="https://doi.org/{{ p.doi }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}{% if p.venue %} <em>{{ p.venue }}</em>{% if p.status %}, <em>{{ p.status }}</em>{% endif %}{% elsif p.status %} <em>{{ p.status }}</em>{% endif %}{% if p.year %}, {{ p.year }}{% endif %}.{% if p.note %} <span class="cv-note">[{{ p.note }}]</span>{% endif %}</li>
      {% endfor %}
    </ol>
  </section>

  <section class="cv-section">
    <h2>Conference Presentations</h2>
    <ul class="cv-pubs">
      {% for p in cv.presentations %}
      <li>{{ p.authors }} {{ p.title }}. <em>{{ p.venue }}</em>, {{ p.year }}.</li>
      {% endfor %}
    </ul>
  </section>

  <section class="cv-section">
    <h2>Technical Skills</h2>
    <dl class="cv-skills">
      {% for s in cv.skills %}
      <dt>{{ s.label }}</dt><dd>{{ s.items }}</dd>
      {% endfor %}
    </dl>
  </section>

</div>

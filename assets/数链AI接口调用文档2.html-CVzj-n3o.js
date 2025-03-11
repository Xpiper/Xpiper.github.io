import{_ as t}from"./b3068a46a74a98cccdaa3c91bfb46888-CP7y00J1.js";import{_ as s,c as e,o as n,a}from"./app-keFXRlWq.js";const i={},l=a(`<h1 id="数链ai接口调用文档2" tabindex="-1"><a class="header-anchor" href="#数链ai接口调用文档2"><span>数链AI接口调用文档2</span></a></h1><p>1、流式对话接口</p><p><strong>正式接口URL</strong>：<a href="http://116.204.85.243:8000/stream" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8000/stream</a></p><p><strong>测试接口URL</strong>： <a href="http://116.204.85.243:8080/stream" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8080/stream</a></p><p><em><strong><u>==先用测试接口，后续调试成功改为正式接口==</u></strong></em></p><p><strong>请求方式</strong>：POST</p><p><strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;query&quot;:&quot;你是谁&quot;,</span>
<span class="line">  &quot;history&quot;:[[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>query</td><td>&quot;你是谁&quot;</td><td>字符串</td><td>是</td><td>对话内容、问题</td></tr><tr><td>history</td><td>[[&quot;你好&quot;, &quot;你好！......&quot;]]</td><td>列表</td><td>是</td><td>对话历史记录</td></tr></tbody></table><p><u>****注：history可为空，为对话历史记录。每次对话会返回用户传入的历史记录和最新的聊天记录，如果需要传入历史记录，可直接提取对话返回的列表，设置传入聊天历史的条数作为历史记录参数。 ***</u></p><p><strong>成功响应示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;你&quot;, &quot;response&quot;: &quot;你&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;好&quot;, &quot;response&quot;: &quot;你好&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;！&quot;, &quot;response&quot;: &quot;你好！&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            </span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;query&quot;: &quot;你好&quot;, &quot;delta&quot;: &quot;[EOS]&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;history&quot;: [[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]], &quot;finished&quot;: true}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>内容说明</th></tr></thead><tbody><tr><td>event</td><td>sse协议中每触发一次事件会生成一个evnet，不可更改</td></tr><tr><td>data</td><td>每次事件返回的结果</td></tr><tr><td>delta</td><td>每次事件返回一个短字符串，流式接口读取该字符串用于前端展示；<br>如果返回[EOS]表示内容结束标志。</td></tr><tr><td>response</td><td>每次事件产生后返回的总内容</td></tr><tr><td>query</td><td>表示用户对话内容或问题</td></tr><tr><td>history</td><td>表示本次对话的历史记录，<br>如果用户传入参数中有history，会一并返回给用户</td></tr><tr><td>finished</td><td>流式接口结束标志，false表示没有结束，true表示本次对话结束。</td></tr></tbody></table><h2 id="_2、本地知识库流式对话接口" tabindex="-1"><a class="header-anchor" href="#_2、本地知识库流式对话接口"><span>2、本地知识库流式对话接口</span></a></h2><p><strong>正式接口URL</strong>：<a href="http://116.204.85.243:8000/local_doc_stream" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8000/local_doc_stream</a></p><p><strong>测试接口URL</strong>：<a href="http://116.204.85.243:8080/local_doc_stream" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8080/local_doc_stream</a></p><p><em><strong><u>==先用测试接口，后续调试成功改为正式接口==</u></strong></em></p><p><strong>请求方式</strong>：POST</p><p><strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;query&quot;:&quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;,</span>
<span class="line">  &quot;history&quot;:[[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>query</td><td>&quot;雾炮机可以将空气中<br>的微小颗粒浓度降低吗&quot;</td><td>字符串</td><td>是</td><td>对话内容、问题</td></tr><tr><td>history</td><td>[[&quot;你好&quot;, &quot;你好！......&quot;]]</td><td>列表</td><td>是</td><td>对话历史记录</td></tr></tbody></table><p><u>****注：history可为空，为对话历史记录。每次对话会返回用户传入的历史记录和最新的聊天记录，如果需要传入历史记录，可直接提取对话返回的列表，设置传入聊天历史的条数作为历史记录参数。 ***</u></p><p><strong>成功响应示例</strong>：</p><p>==①如果匹配到本地知识库内容==</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">resp_idevent: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;根据&quot;, &quot;response&quot;: &quot;根据&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;已知&quot;, &quot;response&quot;: &quot;根据已知&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;信息&quot;, &quot;response&quot;: &quot;根据已知信息&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            </span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;&quot;, &quot;response&quot;: &quot;根据已知信息,雾炮可以将空气中的微小颗粒浓度降低15%左右。&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;query&quot;: &quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;, &quot;delta&quot;: &quot;[EOS]&quot;, &quot;response&quot;: &quot;根据已知信息,雾炮可以将空气中的微小颗粒浓度降低15%左右。&quot;, &quot;history&quot;: [[&quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;, &quot;根据已知信息,雾炮可以将空气中的微小颗粒浓度降低15%左右。&quot;]], &quot;finished&quot;: true, &quot;resp_content&quot;: [{&quot;id&quot;: &quot;lk_2&quot;, &quot;content&quot;: &quot;“雾炮”可以将空气中的微小颗粒浓度降低15%左右&quot;,&quot;que_title&quot;:&quot;“雾炮”能将空气中的微小颗粒浓度降低到多少&quot;}], &quot;source_documents&quot;: true}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==②如果没有匹配到本地知识库内容==</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;你&quot;, &quot;response&quot;: &quot;你&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;好&quot;, &quot;response&quot;: &quot;你好&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;！&quot;, &quot;response&quot;: &quot;你好！&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            </span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;query&quot;: &quot;你好&quot;, &quot;delta&quot;: &quot;[EOS]&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;history&quot;: [[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]], &quot;finished&quot;: true, &quot;source_documents&quot;: false}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><br><table><thead><tr><th>参数值</th><th>内容说明</th></tr></thead><tbody><tr><td>event</td><td>sse协议中每触发一次事件会生成一个evnet，<br>不可更改</td></tr><tr><td>data</td><td>每次事件返回的结果</td></tr><tr><td>delta</td><td>每次事件返回一个短字符串，<br>流式接口读取该字符串用于前端展示；<br>如果返回[EOS]表示内容结束标志。</td></tr><tr><td>response</td><td>每次事件产生后返回的总内容</td></tr><tr><td>query</td><td>表示用户对话内容或问题</td></tr><tr><td>history</td><td>表示本次对话的历史记录，<br>如果用户传入参数中有history，会一并返回给用户</td></tr><tr><td>finished</td><td>流式接口结束标志，<br>false表示没有结束，<br>true表示本次对话结束。</td></tr><tr><td>source_documents</td><td>是否匹配到本地知识库标识，<br>如果匹配到为true，<br>如果没有匹配到为false</td></tr><tr><td>resp_content</td><td>如果匹配到本地知识库内容，<br>则会返回所匹配内容的id和内容，<br>如果没有匹配到，则没有该参数<br>注意：<br>id表示所匹配的id，<br>content表示所匹配的内容；<br>que_title表示所匹配内容的标题<br>返回格式为列表形式，<br>列表中存放id、que_title和content字典，<br>目前列表中只存储一条匹配度最高的字典</td></tr></tbody></table><h2 id="_3、要求" tabindex="-1"><a class="header-anchor" href="#_3、要求"><span>3、要求</span></a></h2><p>① 根据账号信息部分用户调用流式对话接口，部分用户调用本地知识库流式对话接口；</p><p>② 将历史聊天记录加入到对话中，可自行定制传输几条历史聊天记录；</p><p>③ 使用本地知识库流式对话接口时，如果返回匹配到本地知识库，则将在聊天末尾添加信息来源，效果如下：</p><img src="`+t+'" alt="screen-capture" style="zoom:50%;"><hr><p>注意：目前如果匹配到知识库内容只返回一条匹配度最高的信息来源，所返回结果为列表，方便后续添加多条匹配内容；请根据返回id自行查询问题，点击来源链接可跳转到所匹配的内容</p><hr>',41),d=[l];function o(u,r){return n(),e("div",null,d)}const c=s(i,[["render",o],["__file","数链AI接口调用文档2.html.vue"]]),v=JSON.parse('{"path":"/api/dhs/%E6%95%B0%E9%93%BEAI%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8/%E6%95%B0%E9%93%BEAI%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A32.html","title":"数链AI接口调用文档2","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2、本地知识库流式对话接口","slug":"_2、本地知识库流式对话接口","link":"#_2、本地知识库流式对话接口","children":[]},{"level":2,"title":"3、要求","slug":"_3、要求","link":"#_3、要求","children":[]}],"git":{"updatedTime":1740969829000,"contributors":[{"name":"apiper","email":"47816635+Xpiper@users.noreply.github.com","commits":1}]},"filePathRelative":"api/dhs/数链AI接口调用/数链AI接口调用文档2.md"}');export{c as comp,v as data};

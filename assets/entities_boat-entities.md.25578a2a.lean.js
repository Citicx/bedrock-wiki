import{_ as t,r as p,c as e,a,w as o,e as n,o as r,d as l}from"./404.md.78c6dbc2.js";const w='{"title":"Creating Boats","description":"","frontmatter":{"title":"Creating Boats","category":"Tutorials","tags":["recipe","intermediate"]},"headers":[{"level":2,"title":"Using Runtime Identifiers","slug":"using-runtime-identifiers"},{"level":2,"title":"Using Components","slug":"using-components"},{"level":2,"title":"1st method: minecraft:behavior.rise_to_liquid_level","slug":"_1st-method-minecraft-behavior-rise-to-liquid-level"},{"level":2,"title":"2nd method: minecraft:buoyant","slug":"_2nd-method-minecraft-buoyant"},{"level":2,"title":"What method to use?","slug":"what-method-to-use"}],"relativePath":"entities/boat-entities.md","lastUpdated":1639748946755}',c={},u=n('',5),i=l("BP/entities/bar"),b=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.14.0&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foo:bar&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">//This is the component that does the magic</span>
			<span class="token property">&quot;minecraft:behavior.rise_to_liquid_level&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token comment">//This property can adjust how high your boat is above the water</span>
				<span class="token property">&quot;liquid_y_offset&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
				<span class="token comment">//Positive vertical displacement, in other words, how much the boat will move up</span>
				<span class="token property">&quot;rise_delta&quot;</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span>
				<span class="token comment">//Negative vertical displacement, in other words, how much the boat will move down</span>
				<span class="token property">&quot;sink_delta&quot;</span><span class="token operator">:</span> <span class="token number">0.05</span>
				<span class="token comment">//Use rise_delta and sink_delta to simulate waves/bouncing effect</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

			<span class="token comment">//Sets the boat speed in water</span>
			<span class="token property">&quot;minecraft:underwater_movement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//This component is important, without it the boat will sink</span>
			<span class="token property">&quot;minecraft:navigation.walk&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;can_sink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:rideable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;seat_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;family_types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;interact_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;action.interact.enter_boat&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;seats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//Add this component if you want your boat to be controlled with WASD</span>
			<span class="token property">&quot;minecraft:input_ground_controlled&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:health&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//Sets the boat speed on the ground (set this to zero if you don&#39;t want your boats to move on the ground)</span>
			<span class="token property">&quot;minecraft:movement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//This is to prevent the boat from not stopping whenever a player exits, said the boat</span>
			<span class="token property">&quot;minecraft:movement.basic&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:physics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="_2nd-method-minecraft-buoyant" tabindex="-1">2nd method: minecraft:buoyant <a class="header-anchor" href="#_2nd-method-minecraft-buoyant" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,2),k=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.14.0&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foo:bar&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:buoyant&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token comment">//Determines whether gravity should be taken into account (useful with waterfalls)</span>
				<span class="token property">&quot;apply_gravity&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token comment">//Range: 0-1. This controls how high the boat is above the water</span>
				<span class="token property">&quot;base_buoyancy&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
				<span class="token comment">//A &quot;wave&quot; makes the entity bounce up and down. A big wave simply amplifies this effect. Note: setting simulate_waves to false won&#39;t make the effect go away completely.</span>
				<span class="token property">&quot;simulate_waves&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token comment">//How likely a &quot;big&quot; wave will hit this boat</span>
				<span class="token property">&quot;big_wave_probability&quot;</span><span class="token operator">:</span> <span class="token number">0.03</span><span class="token punctuation">,</span>
				<span class="token comment">//How strong the &quot;big&quot; wave will be</span>
				<span class="token property">&quot;big_wave_speed&quot;</span><span class="token operator">:</span> <span class="token number">10.0</span><span class="token punctuation">,</span>
				<span class="token comment">//How strong will the boat be dragged down in case this component is removed</span>
				<span class="token property">&quot;drag_down_on_buoyancy_removed&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token comment">//Blocks this entity can be buoyant in. Only actual liquids are allowed: lava and water</span>
				<span class="token property">&quot;liquid_blocks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;water&quot;</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

			<span class="token comment">//Sets the boat speed in water</span>
			<span class="token property">&quot;minecraft:underwater_movement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//This component is important, without it the boat will sink</span>
			<span class="token property">&quot;minecraft:navigation.walk&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;can_sink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:rideable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;seat_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;family_types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;interact_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;action.interact.enter_boat&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;seats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//Add this component if you want your boat to be controlled with WASD</span>
			<span class="token property">&quot;minecraft:input_ground_controlled&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:health&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//Sets the boat speed on the ground (set this to zero if you don&#39;t want your boats to move on the ground)</span>
			<span class="token property">&quot;minecraft:movement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//This is to prevent the boat from not stopping whenever a player exits the boat</span>
			<span class="token property">&quot;minecraft:movement.basic&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:physics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h2 id="what-method-to-use" tabindex="-1">What method to use? <a class="header-anchor" href="#what-method-to-use" aria-hidden="true">#</a></h2><p>Both methods are suitable but have their pros and cons. If you want to disable the bouncing effect, use the first method. If you want more control over it, use the second method. I use the second method for static objects, such as buoys, and the first method for movable entities, such as boats, emulating the vanilla behavior.</p>__VP_STATIC_END__`,3);function m(d,q,h,y,_,f){const s=p("CodeHeader");return r(),e("div",null,[u,a(s,null,{default:o(()=>[i]),_:1}),b,a(s),k])}var g=t(c,[["render",m]]);export{w as __pageData,g as default};
/* Style Reference:

// HEADERS
<h2 class="content-section-header"></</h2>
<h3 class="tpm-content-section-header theme-font-color"></h3>
<h4 class="tpm-content-subheaders theme-font-color"></h4>

// TABLES
<div class="table-overflow-wrapper">
    <table>
        <thead>
            <th class="table-cell-first"></th>
            <th></th>
            <th class="table-cell-last"></th>
        </thead>
        <tbody>
            <tr>
                <td class="table-cell-first"></td>
                <td></td>
                <td class="table-cell-last"></td>
            </tr>
        </tbody>
    </table>
</div>
// NESTEd tables - adjust colspan value to specific table requirements
<td colspan=""> 
    <table>
        <tr>
            <td class="table-nested-cell-first"></td>
            <td></td>
            <td></td>
            <td class="table-cell-last"></td>
        </tr>
        <tr class="table-cell-no-border">
            <td class="table-nested-cell-first"></td>
            <td></td>
            <td></td>
            <td class="table-cell-last"></td>
        </tr>
    </table>
</td>
// SUBHEADER rows - adjust colspan value to specific table requirements
<tr class="table-cell-no-border"><td colspan=""></td></tr>
<tr class="table-cell-no-border">
    <td colspan="" class="table-cell-first theme-font-color"></td>
</tr>

// TIMELINES
<article id="dates-wrapper">
    <div class="dates-entry dates-entry-left">
        <span class="dates-circle dates-circle-left"></span>
        <p class="dates-entry-text"><strong></strong><br /></p>
    </div>
    <div class="dates-entry dates-entry-right">
        <span class="dates-circle dates-circle-right"></span>
        <p class="dates-entry-text"><strong></strong><br /></p>
    </div>
</article>
*/

const ref = {
    'highway': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What Do We Measure?</h3>
            <p>State Departments of Transportation (DOTs) must set annual targets for five safety-related performance measures, with the goal of achieving a significant reduction in traffic fatalities and serious injuries on all public roads. State DOTs report baseline values, targets, and progress toward reducing the number and rate of fatalities, the number and rate of serious injuries, and the number of non-motorized fatalities and serious injuries to FHWA in an annual safety report. MPOs may either establish quantitative targets for their metropolitan planning area or agree to adopt the statewide targets. </p>
            <p>FHWA requires the DOTs and MPOs to establish safety targets on an annual basis for:</p>
            <ul>
                <li><strong>Number of Fatalities:</strong> The total number of persons suffering fatal injuries in a motor vehicle crash during a calendar year.</li>
                <li><strong>Rate of Fatalities:</strong> The ratio of total number of fatalities to the number of vehicle miles traveled (VMT, in 100 Million VMT) in a calendar year.</li>
                <li><strong>Number of Serious Injuries:</strong> The total number of persons suffering at least one serious injury in a motor vehicle crash during a calendar year.</li>
                <li><strong>Rate of Serious Injuries:</strong> The ratio of total number of serious injuries to the number of VMT (in 100 Million VMT) in a calendar year.</li>
                <li><strong>Number of Non-motorized Fatalities and Non-motorized Serious Injuries:</strong> The combined total number of non-motorized fatalities and non-motorized serious injuries involving a motor vehicle during a calendar year.</li>
            </ul>
            <p>Measures are for all public roads regardless of functional classification or ownership and each target is based on a five-year rolling average, which is the average of five individual, consecutive points of data.</p>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What Are The Targets?</h3>
            <p>DVRPC agrees to plan and program projects that contribute toward meeting or exceeding PennDOT’s and NJ DOT’s statewide roadway safety targets.</p>
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>NJ Baseline <br /> <small>(2015 - 2019)</small></th>
                        <th class="table-cell-last">NJ Target <br /> <small>(2017 - 2021)</small></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>582.6</td>
                            <td class="table-cell-last">574</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>0.756</td>
                            <td class="table-cell-last">0.740</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>1,469.2</td>
                            <td class="table-cell-last">2,124.8</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>1.9</td>
                            <td class="table-cell-last">2.724</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>463.7</td>
                            <td class="table-cell-last">588.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small>
            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>PA Baseline <br /><small>(2015 - 2019)</small></th>
                        <th class="table-cell-last">PA Target <br /><small>(2017 - 2021)</small></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>1,154.8</td>
                            <td class="table-cell-last">1,088.2</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>1.135</td>
                            <td class="table-cell-last">1.059</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>4,166.6</td>
                            <td class="table-cell-last">4,551.2</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>4.097</td>
                            <td class="table-cell-last">4.431</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>741.6</td>
                            <td class="table-cell-last">800.8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>source: DVRPC 2021</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>State DOTs report baseline values, targets, and progress toward meeting the targets to FHWA in an annual safety report. FHWA will determine whether a state has met or made significant progress toward its safety performance targets. A state is considered to have met or made significant progress when at least four out of the five safety performance targets are met or the actual outcome for the safety performance target is better than baseline performance.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Meeting a Target</h4>
            <span>If the actual outcome for a performance measure is equal to or less than the target, the target has been met.</span>
            <h4 class="tpm-content-subheaders theme-font-color">Better than Baseline</h4>
            <span>If a state has not met a target, FHWA will determine if the actual outcome for the target is better than the baseline performance for that target. The baseline performance is the five-year rolling average for the target ending the year prior to the establishment of the state's target.</span>
            <p>If a state has not met or made significant progress toward meeting its targets, the state must comply with the provisions set forth in 23 USC 148(i) for the subsequent fiscal year. The state shall:</p>
            <ol>
                <li>Use obligation authority equal to the Highway Safety Improvement Program (HSIP) apportionment for the year prior to the target year, only for HSIP projects.</li>
                <li>Submit an HSIP Implementation Plan that describes actions the state will take to meet or make significant progress toward meeting its targets. The HSIP Implementation Plan should guide the state's project decisions so that the combined 148(i) provisions lead to the state meeting or making significant progress toward meeting its safety performance targets in subsequent years.</li>
            </ol>
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey</h4>
            <div class="table-overflow-wrapper">
                <table class="table-wide">
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th class="table-cell-wide">Target<br /><small>(2015 - 2019)</small></th>
                        <th class="table-cell-wide">Actual<br /><small>(2015 - 2019)</small></th>
                        <th class="table-cell-wide">Baseline<br /><small>(2013 - 2017)</small></th>
                        <th class="table-cell-wide">Target Achieved?</th>
                        <th class="table-cell-wide">Better Than Baseline?</th>
                        <th class="table-cell-wide table-cell-last">Met or Made Significant Progress?*</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>605</td>
                            <td>582.6</td>
                            <td>577.6</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>0.780</td>
                            <td>0.756</td>
                            <td>0.761</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>1,101.4</td>
                            <td>1,469.2</td>
                            <td>1,092.5</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>1.422</td>
                            <td>1.9</td>
                            <td>1.439</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>393.9</td>
                            <td>463.7</td>
                            <td>379.1</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small>*Four out of five targets must be met, or have better performance than the baseline.</small>
            <p>Based on preliminary data, New Jersey has not demonstrated that it has met or made significant progress towards its safety performance targets on three out of five performance measures: Number of Serious Injuries, Rate of Serious Injuries, and Number of Non-Motorized Fatalities and Serious Injuries for CY 2019. FHWA will issue a decision based on final data in spring 2021.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania</h4>
            <div class="table-overflow-wrapper">
                <table class="table-wide">
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th class="table-cell-wide">Target<br /><small>(2015 - 2019)</small></th>
                        <th class="table-cell-wide">Actual<br /><small>(2015 - 2019)</small></th>
                        <th class="table-cell-wide">Baseline<br /><small>(2013 - 2017)</small></th>
                        <th class="table-cell-wide">Target Achieved?</th>
                        <th class="table-cell-wide">Better Than Baseline?</th>
                        <th class="table-cell-wide table-cell-last">Met or Made Significant Progress?*</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>1,146.3</td>
                            <td>1,154.8</td>
                            <td>1,185.6</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>1.121</td>
                            <td>1.135</td>
                            <td>1.179</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>3,971.2</td>
                            <td>4,166.6</td>
                            <td>3,588.4</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>3.883</td>
                            <td>4.097</td>
                            <td>3.569</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>698.4</td>
                            <td>741.6</td>
                            <td>629.8</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small>*Four out of five targets must be met, or have better performance than the baseline.</small>
            <p>Pennsylvania did not meet or make significant progress towards its safety performance targets on three out of five performance measures: Number of Serious Injuries, Rate of Serious Injuries, and Number of Non-Motorized Fatalities and Serious Injuries for CY 2019. PennDOT is now required to submit an updated HSIP Implementation Plan. This plan is currently being written and is scheduled to be delivered to FHWA by the June 30, 2021 deadline. PennDOT is also required to use obligation authority equal to the HSIP apportionment for FY2019 for safety projects in the upcoming fiscal year.</p>
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
            <article id="dates-wrapper">
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>April 2016</strong><br />Final rule effective date.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>August 2017</strong><br />State DOTs report CY 2018 targets on HSIP Annual Report to FHWA (annually thereafter).</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>February 2018</strong><br />DVRPC establishes targets for the Safety Performance Measures for the first time (annually thereafter).</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>February 2020</strong><br />DVRPC reports on progress toward CY 2018 targets (annually thereafter).</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>June 30, 2020</strong><br />If a State has not met or made significant progress toward meeting its targets, the state must submit an HSIP Implementation Plan that describes actions the state will take to meet or make significant progress toward meeting its targets. (annually thereafter)</p>
                </div>
            </article>
            
            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://www.fhwa.dot.gov/tpm" target="blank" rel="noopener noreferrer">FHWA TPM website</a></li>
                <li><a href="https://safety.fhwa.dot.gov/hsip/spm/" target="blank" rel="noopener noreferrer">FHWA Safety Performance Management Webpage</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/reporting/state/" target="blank" rel="noopener noreferrer">State Performance Dashboard and Reports</a></li>
                <li><a href="https://www.penndot.gov/TravelInPA/Safety/Pages/Strategic-Highway-Safety-Plan.aspx" target="blank" rel="noopener noreferrer">Pennsylvania Strategic Highway Safety Plan</a></li>
                <li><a href="https://www.saferoadsforallnj.com" target="blank" rel="noopener noreferrer">New Jersey Strategic Highway Safety Plan</a></li>
                <li><a href="https://www.federalregister.gov/documents/2016/03/15/2016-05202/national-performance-management-measures-highway-safety-improvement-program" target="blank" rel="noopener noreferrer">Safety Performance Measure Final Rule</a></li>
            </ul>
        `
    },
    'bridgepavement': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What Do We Measure?</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Pavement</h4>
            <p>State Departments of Transportation (DOTs) must establish targets, regardless of ownership, for the full extent of the Interstate and non-Interstate National Highway System (NHS).  FHWA has set numerical standards that categorize pavement conditions as good, fair, or poor.  Pavement in good condition suggests no major investment is needed. Pavement in poor condition suggests that major reconstruction investment is needed. Road pavements are classified as one of three types: concrete, bituminous (also known as asphalt), and jointed concrete—which is a series of contiguous concrete slabs joined together. Pavement condition is determined by specific measures, which include the International Roughness Index (IRI), cracking, rutting, and faulting:</p>
            <ul>
                <li>IRI quantifies how rough the pavement is by measuring the longitudinal profile of a traveled wheel track and generating a standardized roughness value in inches per mile.</li>
                <li>Cracking measures the percentage of bituminous and concrete pavement surface that is cracked.</li>
                <li>Rutting measures the depth of ruts (surface depression) in bituminous pavement in inches.</li>
                <li>Faulting quantifies the misalignment between concrete slabs as the difference in elevation across transverse concrete pavement joints in inches.</li>
            </ul>
            <p>Roughness affects travel speeds, safety, comfort, and transportation costs. Cracking, rutting, and faulting are surface indicators of underlying structural deterioration. All three pavement types consider IRI and cracking. Bituminous pavements additionally consider rutting, while jointed concrete also utilizes faulting.</p>
            <p>The performance-based planning regulation requires that state DOTs set two and four-year targets for the percentage of pavement miles that fall into the “good” and “poor” category on the state’s Interstate and non-Interstate NHS. Specific targets are set for:</p>
            <ul>
                <li>Percentage of Interstate Pavements in Good Condition.</li>
                <li>Percentage of Interstate Pavements in Poor Condition.</li>
                <li>Percentage of non-Interstate Pavements in Good Condition.</li>
                <li>Percentage of non-Interstate Pavements in Poor Condition.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Bridges</h4>
            <p>State DOTs must establish targets for all bridges carrying the NHS, which includes on- and off-ramps connected to the NHS within a state, and bridges carrying the NHS that cross a state border, regardless of ownership. Each bridge is given ratings for its deck, superstructure, and substructure components during regular inspections using National Bridge Inventory (NBI) standards. Each component is given a rating that ranges between 9 and 0 on the FHWA condition scale. A structure’s overall condition rating is determined by the lowest value for its deck, superstructure, substructure, or culvert rating. If any of the components of a structure qualify as poor, the structure is deemed poor; while all the components must have a good rating for the structure to be deemed in good repair. Poor condition does not mean the bridge is unsafe to use. Both PennDOT and NJDOT will take necessary action to restrict heavy-weight vehicles or close a bridge in order to ensure safety. Bridge condition performance measures are calculated by summing the deck area of bridges in “good” and “poor” condition and dividing by the total deck area of all NHS bridges.</p>
            <span>Bridge deck conditions are based on deck area and targets are set for:</span>
            <ul>
                <li>Percentage of NHS bridge deck area that is in good condition for all mainline Interstate Highway System bridges.</li>
                <li>Percentage of NHS bridge deck area that is in good condition for all mainline non-Interstate NHS bridges.</li>
            </ul>
            <p>The states are also required to set goals for the percentage of NHS bridge deck area that is in good condition for all mainline Interstate Highway System and non-Interstate NHS bridges regardless of who owns or is responsible for maintaining the bridge. Bridges that are determined to be structurally deficient, in the NBI, are considered to be in poor condition.</p>
            <p>MPOs may either establish quantitative targets for their metropolitan planning area or agree to adopt the statewide targets. DVRPC has adopted and supports the respective state DOT targets.</p>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What Are The Targets?</h3>
            <p>DVRPC agrees to plan and program projects that contribute toward meeting or exceeding PennDOT’s and NJ DOT’s statewide infrastructure condition targets.</p>
            
            <h4 class="tpm-content-subheaders theme-font-color">Interstate Pavement Infrastructure</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">2019 Two-Year Target<sup>1</sup></th>
                        <th colspan="2">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Good Condition</td>
                            <td>61.25%</td>
                            <td>67.2%</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>50%</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Poor Condition</td>
                            <td>1.01%</td>
                            <td>0.4%</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>2.5%</td>
                            <td>2%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Two-year targets are not required for Pavement Infrastructure on the Interstate system for this first reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Non-Interstate NHS Pavement Infrastructure</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure<sup>1</sup></th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">2019 Two-Year Target</th>
                        <th colspan="2">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Good Condition</td>
                            <td>32.45%</td>
                            <td>36.8%</td>
                            <td>25%</td>
                            <td>35%</td>
                            <td>25%</td>
                            <td>33%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Poor Condition</td>
                            <td>2.38%</td>
                            <td>2.3%</td>
                            <td>2.5%</td>
                            <td>4%</td>
                            <td>15%<sup>2</sup></td>
                            <td>5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Measure based on Full Distress + International Roughness Index methodology</small><br />
            <small><sup>2</sup>Four-year target was adjusted for the New Jersey Percentage Non-Interstate NHS Pavement Lane Miles in Poor Condition at the mid-term reporting period</small>

            <h4 class="tpm-content-subheaders theme-font-color">Bridge Infrastructure</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">2019 Two-Year Target</th>
                        <th colspan="2">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Good Condition</td>
                            <td>21.7%</td>
                            <td>23.7%</td>
                            <td>19.4%</td>
                            <td>25.8%</td>
                            <td>21.3%<sup>1</sup></td>
                            <td>26%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Poor Condition</td>
                            <td>6.5%</td>
                            <td>5.1%</td>
                            <td>6.5%</td>
                            <td>5.6%</td>
                            <td>6.8%<sup>1</sup></td>
                            <td>6%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year targets were adjusted for the New Jersey Percentage NHS Bridge Deck Area in Good Condition and Poor Condition at the mid-term reporting period.</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>State DOTs must show whether they have met or made significant progress toward meeting the targets. The states’ first two-year progress report were submitted in October 2020. Based on the progress reports, NJ DOT and PennDOT have adjusted some of their four-year targets as noted in the tables below.</p>
            
            <h4 class="tpm-content-subheaders theme-font-color">Pavement</h4>
            <p>Meeting the Target: The federal Infrastructure PM Rule requires that less than 5 percent of Interstate miles be considered in poor condition in order to meet the federal threshold for pavement condition.</p>
            <span>If pavement conditions on the <strong>Interstate</strong> system fail to meet the federal minimum condition thresholds in the most recent year of the State biennial report, the state DOT must comply with the provisions set forth in 23 USC 119(f) for the subsequent fiscal year. The State shall:</span>
            <ul>
                <li>Use obligation authority to transfer a portion of State Transportation Planning (STP) funds to the NHPP for maintenance projects to address interstate pavement conditions.</li>
                <li>Submit a Transportation Asset Management Plan (TAMP) that describes actions the state will take to meet or make significant progress toward meeting its targets. The TAMP should guide the state's project decisions in order to meet or make significant progress toward meeting its infrastructure performance targets in subsequent years.</li>
            </ul>
            <span>If a state has not met or made significant progress toward meeting its targets on the <strong>non-Interstate NHS system</strong>, the state DOT shall:</span>
            <ul>
                <li>Submit a TAMP that describes actions the state will take to meet or make significant progress toward meeting its targets. The TAMP should guide the state's project decisions in order to meet or make significant progress toward meeting its infrastructure performance targets in subsequent years.</li>
            </ul>

            <h4 class="tpm-content-subheaders theme-font-color">Interstate Pavement Infrastructure</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-double-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-double-wide">2019 Two-Year Target<sup>1</sup></th>
                        <th colspan="2" class="table-cell-double-wide">2021 Two-Year Performance</th>
                        <th colspan="2" class="table-cell-double-wide">Original 2021 Four-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year Target Achieved</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Good Condition</td>
                            <td>61.25%</td>
                            <td>67.2%</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>62.1%</td>
                            <td>71.5%</td>
                            <td>50%</td>
                            <td>60%</td>
                            <td>n/a</td>
                            <td>n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Poor Condition</td>
                            <td>1.01%</td>
                            <td>0.4%</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>1.8%</td>
                            <td>0.4%</td>
                            <td>2.5%</td>
                            <td>2%</td>
                            <td>n/a</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Two-year targets are not required for Pavement Infrastructure on the Interstate system for this first reporting period.</small>
            
            <h4 class="tpm-content-subheaders theme-font-color">Non-Interstate NHS Pavement Infrastructure</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure<sup>1</sup></th>
                        <th colspan="2" class="table-cell-double-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-double-wide">2019 Two-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">2019 Two-Year Performance</th>
                        <th colspan="2" class="table-cell-double-wide">Original 2021 Four-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Good Condition</td>
                            <td>32.45%</td>
                            <td>36.8%</td>
                            <td>25%</td>
                            <td>35%</td>
                            <td>33%</td>
                            <td>37.6%</td>
                            <td>25%</td>
                            <td>33%</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Poor Condition</td>
                            <td>2.38%</td>
                            <td>2.3%</td>
                            <td>2.5%</td>
                            <td>4%</td>
                            <td>10.7%</td>
                            <td>2%</td>
                            <td>2.5%<sup>2</sup></td>
                            <td>5%</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Measure based on Full Distress + International Roughness Index methodology</small><br />
            <small><sup>2</sup>Four-year target was adjusted for the New Jersey Percentage Non-Interstate NHS Pavement Lane Miles in Poor Condition at the mid-term reporting period</small>

            <h4 class="tpm-content-subheaders theme-font-color">Bridges</h4>
            <p>Meeting the Target: The federal Infrastructure PM Rule requires that no more than 10 percent of the total deck area of bridges on the NHS be considered structurally deficient in order to meet the federal threshold for bridge condition.</li>
            <span>If a state has not met the federal threshold for bridge conditions for three consecutive years, the state DOT shall:</span>
            <ul>
                <li>Obligate and set aside NHPP funds for eligible NHS bridge projects. The set-aside will remain in effect until the State meets the threshold of less than 10 percent of bridge deck area classified as structurally deficient.</li>
            </ul>

            <h4 class="tpm-content-subheaders theme-font-color">Bridge Infrastructure</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-double-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-double-wide">2019 Two-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">2019 Two-Year Performance</th>
                        <th colspan="2" class="table-cell-double-wide">Original 2021 Four-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Good Condition</td>
                            <td>21.7%</td>
                            <td>23.7%</td>
                            <td>19.4%</td>
                            <td>25.8%</td>
                            <td>22.1%</td>
                            <td>27%</td>
                            <td>18.6%<sup>1</sup></td>
                            <td>26%</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Poor Condition</td>
                            <td>6.5%</td>
                            <td>5.1%</td>
                            <td>6.5%</td>
                            <td>5.6%</td>
                            <td>6.8%</td>
                            <td>5.1%</td>
                            <td>6.5%<sup>1</sup></td>
                            <td>6%</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year targets were adjusted for the New Jersey Percentage NHS Bridge Deck Area in Good Condition and Poor Condition at the mid-term reporting period.</small>
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
            <article id="dates-wrapper">
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>May 20, 2017</strong><br />Final rule effective date.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>January 1, 2018</strong><br />1<sup>st</sup> four-year performance period begins.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>May 20, 2018</strong><br />Initial two- and four-year targets established.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>October 1, 2018</strong><br />Baseline Performance Period Report for the 1<sup>st</sup> Performance Period due. State DOTs report two-year and four-year targets; etc. Within 180 days of relevant state DOT(s) target establishment MPOs must commit to support state target or establish separate quantifiable target.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2020</strong><br />Mid Performance Period Progress Report for the 1<sup>st</sup> Performance Period due. State DOTs report two-year condition/performance; progress toward achieving two-year targets; etc.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>December 31, 2021</strong><br />1<sup>st</sup> four-year performance period ends.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2022</strong><br />Full Performance Period Progress Report for 1<sup>st</sup> performance period due. State DOTs report four-year condition/performance; progress toward achieving four-year targets; etc. Baseline report due for 2<sup>nd</sup> performance period due. State DOTs report two- and 4four-year targets; baseline condition, etc.</p>
                </div>
            </article>

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://www.fhwa.dot.gov/asset/plans.cfm" target="blank" rel="noopener noreferrer">State Asset Management Plans</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/reporting/state/" target="blank" rel="noopener noreferrer">State Performance Dashboard and Reports</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/" target="blank" rel="noopener noreferrer">FHWA Transportation Performance Management Webpage</a></li>
                <li><a href="https://www.federalregister.gov/documents/2017/01/18/2017-00550/national-performance-management-measures-assessing-pavement-condition-for-the-national-highway" target="blank" rel="noopener noreferrer">Federal Register Rulemaking</a></li>
            </ul>
        `
    },
    'systemperf': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What Do We Measure?</h3>
            <h4 class="tpm-content-subheaders theme-font-color">National Highway System (NHS) Travel Time Reliability</h4>
            <p>State Departments of Transportation (DOTs) must establish statewide targets for the performance of the Interstate and non-Interstate National Highway System (NHS) during four peak travel time periods which include peak daytime periods and weekend periods. Each state sets its performance targets for the Level of Travel Time Reliability (LOTTR) Index which indicates the reliability of travel on the Interstate and non-Interstate NHS. A road segment is considered reliable if the ratio of the 80th percentile peak hour travel time to the normal peak hour travel time (50th percentile) is less than 1.5. The measure also incorporates vehicle occupancy to identify the person miles traveled on the system. LOTTR targets are established for the entire state that reflect the person miles traveled on road segments that are considered reliable. Two- and four-year targets are set for:</p>
            <ul>
                <li>Percentage of person miles traveled on the Interstate System that are considered reliable.</li>
                <li>Percentage of person miles traveled on the non-Interstate NHS that are considered reliable.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Freight Reliability</h4>
            <p>State DOTs must establish a single index for the Interstate system in the state for five peak hour travel time periods which include peak daytime periods, an overnight period, and weekend periods. The Truck Travel Time Reliability (TTTR) Index is measured by the ratio of the congested peak period travel time (95th percentile) to the normal peak period travel time (50th percentile), on each road segment on the Interstate system for the time periods. The highest TTTR value is used to determine the reliability of the Interstate system for truck traffic or freight reliability. The DOT establishes two- and four-year targets for:</p>
            <ul>
                <li><p>The ratio of the congested period travel time to the normal period travel time, weighted by the length of the Interstate segment, for the entire Interstate system in the state.</p></li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Performance of the CMAQ Program</h4>
            <p>There are three performance measures established to measure the performance of the federal Congestion Mitigation and Air Quality (CMAQ) program. Two of the measures assess the program’s influence on traffic congestion and the third measures the program’s performance in reducing on-road mobile source emissions.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Congestion Measures</h4>
            <p>State DOTs, in collaboration with the appropriate MPOs, must establish single, unified targets for the Annual Peak Hour Excessive Delay (PHED) and Percent Non-Single Occupant Vehicle (non-SOV) Travel on the NHS in urbanized areas (UZAs) that intersect with Clean Air Act Nonattainment or Maintenance Areas. Single targets are established for an entire UZA across state and MPO boundaries through a collaborative planning process. Peak Hour Excessive Delay (PHED) per capita on the NHS is the threshold for excessive delay and is based on the travel time at 20 miles per hour or 60 percent of the posted speed limit travel time, whichever is greater, and is measured in 15-minute intervals. The measure indicates the traffic delay experienced by travelers throughout an entire year on roadways, specifically during the peak hours. Peak travel hours are defined as 6–10 a.m. on weekday mornings and the weekday afternoon period is 3–7 p.m. The total excessive delay metric is weighted by vehicle volumes and occupancy.</p>
            <p>The performance-based planning regulation requires that state DOTs set two- and four-year targets for PHED and percent non-SOV Travel for urbanized areas (UZAs) with populations greater than 1 million people in the first performance period (beginning in 2018) and two- and four-year targets for UZAs with populations greater than 200,000 people in the second and subsequent performance periods (beginning in 2022). Targets are set for:</p>
            <ul>
                <li>Annual hours of peak hour excessive delay per person for the entire UZA.</li>
                <li>Percentage of travel in an UZA conducted by means other than a SOV.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Emissions Reduction Measures</h4>
            <p>State DOTs whose geographic boundaries include any part of a nonattainment or maintenance area for ozone, carbon monoxide, or particulate matter are required to establish two- and four-year targets for the quantifiable pollutants that are reduced through transportation projects funded through the CMAQ program. State DOTs establish targets for the entire state and MPOs can support state targets or develop MPO targets. Targets for the performance period represent the cumulative pollutant reductions from CMAQ funded projects. Targets are set for:</p>
            <ul>
                <li>On-road mobile source emissions reduced through the CMAQ program for the Ozone precursors Nitrogen Oxides (NO<sub>x</sub>) and Volatile Organic Compounds (VOC<sub>s</sub>), Fine Particulate Matter (PM<sub>2.5</sub>), and Carbon Monoxide (CO). CO is required in Pennsylvania only.</li>
            </ul>
            <p>MPOs may either establish quantitative targets for their metropolitan planning area or agree to adopt the statewide targets. DVRPC has adopted and supports the respective state DOT targets.</p>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What Are The Targets?</h3>
            <p>DVRPC agrees to plan and program projects that contribute toward meeting or exceeding PennDOT’s and NJ DOT’s statewide system performance targets.</p>

            <h4 class="tpm-content-subheaders theme-font-color">System Reliability</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">Two-Year Target</th>
                        <th colspan="2">Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% of Person Miles Traveled on the Interstate that are Reliable</td>
                            <td>82.1</td>
                            <td>89.8</td>
                            <td>82</td>
                            <td>89.8</td>
                            <td>82</td>
                            <td>89.5<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% of Person Miles Traveled on the Non-Interstate NHS that are Reliable</td>
                            <td>84.1</td>
                            <td>87.4</td>
                            <td>n/a<sup>1</sup></td>
                            <td>n/a<sup>1</sup></td>
                            <td>84.1</td>
                            <td>87.4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Two-year targets are not required for the first reporting period.</small><br />
            <small><sup>2</sup>Four-year target was adjusted for the Pennsylvania Percentage of Person Miles Traveled on the Interstate that are Reliable at the mid-term reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Freight Reliability</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">Two-Year Target</th>
                        <th colspan="2">Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Truck Travel Time Reliability</td>
                            <td>1.82</td>
                            <td>1.35</td>
                            <td>1.9</td>
                            <td>1.34</td>
                            <td>1.95</td>
                            <td>1.4<sup>1</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year target was adjusted for the Pennsylvania Truck Travel Time Reliability at the mid-term reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Congestion - Peak-Hour Excessive Delay</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">Two-Year Target<sup>1</sup></th>
                        <th colspan="2">Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Annual Peak Hours of Excessive Delay: Phila UZA</td>
                            <td>16.8</td>
                            <td>16.8</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>17.2</td>
                            <td>17.2</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Annual Peak Hours of Excessive Delay: NYC UZA</td>
                            <td>20</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>22</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Two-year targets are not required for the first reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Congestion Percent Non-Single Occupant Vehicle Travel</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2">2017 Baseline</th>
                        <th colspan="2">Two-Year Target</th>
                        <th colspan="2">Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-SOV Travel: Phila UZA</td>
                            <td>27.9</td>
                            <td>27.9</td>
                            <td>28</td>
                            <td>28</td>
                            <td>28.1</td>
                            <td>28.1</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-SOV Travel: NYC UZA</td>
                            <td>51.6</td>
                            <td>n/a</td>
                            <td>51.6</td>
                            <td>n/a</td>
                            <td>51.7</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small>

            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Emissions</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-double-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: PM<sub>2.5</sub></td>
                            <td>9.572</td>
                            <td>25.870</td>
                            <td>4.29</td>
                            <td>10.76</td>
                            <td>8.52</td>
                            <td>20.49</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: NO<sub>x</sub></td>
                            <td>244.301</td>
                            <td>971.78</td>
                            <td>114.401</td>
                            <td>337.7</td>
                            <td>231.85</td>
                            <td>612.82</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: VOC<sub>s</sub></td>
                            <td>44.493</td>
                            <td>302.38</td>
                            <td>17.682</td>
                            <td>109.46</td>
                            <td>36.324</td>
                            <td>201.73</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: CO</td>
                            <td>n/a</td>
                            <td>1,135.4</td>
                            <td>n/a</td>
                            <td>567.7</td>
                            <td>n/a</td>
                            <td>250<sup>1</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year target was adjusted for Pennsylvania CO at the mid-term reporting period.</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>State DOTs must submit interim and full term (two- and four-year) progress reports for all of the system performance measures to demonstrate whether they have met or made significant progress toward meeting the targets. FHWA will only provide significant progress determinations for the LOTTR and TTTR measures. The states’ first two-year progress reports were submitted in October 2020.</p>
            
            <h4 class="tpm-content-subheaders theme-font-color">NHS Travel Time Reliability (LOTTR)</h4>
            <p>Meeting the Target: The federal NHS travel time reliability rule requires that state DOTs set separate targets for travel time reliability on the entire Interstate system and the non-Interstate NHS system within the state based on the person miles traveled on the percentage of system miles that are deemed reliable for travel time. States meet the targets if the Interstate and non-Interstate NHS system performance is equal to or below the baseline condition or the target established by DOT.</p>
            <p>If the state does not meet the baseline condition or exceeds its target of travel time reliability on the Interstate system or non-Interstate system (measured separately), the state shall provide documentation identifying why the target wasn’t met and actions that will be taken to improve system reliability.</p>
            
            <h4 class="tpm-content-subheaders theme-font-color">Freight Reliability (TTTR)</h4>
            <p>Meeting the Target: The federal freight system reliability rule requires that state DOTs set a target for truck travel time reliability on the Interstate system based on the ratio of the congested period (95th percentile) travel time to the normal (50th percentile) period travel time on the Interstate system. States meet the targets if the Interstate performance is equal to or below the baseline condition or the target established by the state DOT.</p>
            <p>If the state does not meet or exceeds the baseline condition or its targeted ratio of travel times on the Interstate system. The state shall provide additional documentation identifying why the target wasn’t met and actions (in addition to those that are being taken to improve the LOTTR) that are being taken to improve freight system reliability performance.</p>
            
            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Performance Measures</h4>
            <h4 class="tpm-content-subheaders theme-font-color">Peak-Hour Excessive Delay (PHED) and Percent of Non-SOV Travel</h4>
            <p>Meeting the Target: The federal rules requiring the assessment of the CMAQ program’s effectiveness in reducing traffic congestion requires that state DOTs work with MPOs to collaboratively establish two- and four-year targets for PHED on the NHS and percent non-SOV travel in UZAs with populations greater than one million people in the first performance period (2018–2022) and in UZAs with population greater than 200,000 people in subsequent performance periods. DOTs and MPOs are meeting their two and four-year targets if PHED and percent non-SOV travel in the UZA is equal to or below the targets established by the MPOs and state DOTs. If the states and MPOs do not meet these targets, they are able to adjust the targets and evaluate future CMAQ investments that may improve progress towards meeting the targets.</p>
            
            <h4 class="tpm-content-subheaders theme-font-color">Emissions Reductions Targets</h4>
            <p>Meeting the Target: The federal rules requiring the assessment of the CMAQ program’s effectiveness in reducing on-road mobile emissions require that state DOTs and MPOs serving UZAs with over one million people establish two- and four-year targets for the amount of applicable emissions that are reduced through CMAQ funded projects for both the MPO region and statewide. Applicable emissions are determined by the attainment status of the criteria pollutants. If the states and MPOs do not meet these targets, they are able to adjust the targets and evaluate future CMAQ investments that may improve progress towards meeting the targets.</p>

            <h4 class="tpm-content-subheaders theme-font-color">System Reliability</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year (2019) Performance</th>
                        <th colspan="2" class="table-cell-wide">Four-Year Original Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% of Person Miles Traveled on the Interstate that are Reliable</td>
                            <td>82.1</td>
                            <td>89.8</td>
                            <td>82</td>
                            <td>89.8</td>
                            <td>80.6</td>
                            <td>89.9</td>
                            <td>82</td>
                            <td>89.8%<sup>1</sup></td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% of Person Miles Traveled on the Non-Interstate NHS that are Reliable</td>
                            <td>84.1</td>
                            <td>87.4</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>86.2</td>
                            <td>88.5</td>
                            <td>84.1</td>
                            <td>87.4</td>
                            <td>n/a</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year target was adjusted for the Pennsylvania Percentage of Miles Traveled on the Interstate that are Reliable at the mid-term reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Freight Reliability</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year (2019) Performance</th>
                        <th colspan="2" class="table-cell-wide">Four-Year Original Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Truck Travel Time Reliability</td>
                            <td>1.82</td>
                            <td>1.35</td>
                            <td>1.9</td>
                            <td>1.34</td>
                            <td>1.89</td>
                            <td>1.36</td>
                            <td>1.95</td>
                            <td>1.34<sup>1</sup></td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year target was adjusted for the Pennsylvania Truck Travel Time Reliability at the mid-term reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Congestion - Peak-Hour Excessive Delay</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year (2019) Performance</th>
                        <th colspan="2" class="table-cell-wide">Four-Year Original Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Annual Peak Hours of Excessive Delay: Phila UZA</td>
                            <td>16.8</td>
                            <td>16.8</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>14.6</td>
                            <td>14.6</td>
                            <td>17.2</td>
                            <td>17.2</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Annual Peak Hours of Excessive Delay: NYC UZA</td>
                            <td>20</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>22.3</td>
                            <td>n/a</td>
                            <td>22</td>
                            <td>n/a</td>
                            <td>No</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small>

            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Congestion Percent Non-Single Occupant Vehicle Travel</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year (2019) Performance</th>
                        <th colspan="2" class="table-cell-wide">Four-Year Original Target</th>
                        <th colspan="2" class="table-cell-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-SOV Travel: Phila UZA</td>
                            <td>27.9</td>
                            <td>27.9</td>
                            <td>28</td>
                            <td>28</td>
                            <td>28.2</td>
                            <td>28.2</td>
                            <td>28.1</td>
                            <td>28.1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-SOV Travel: NYC UZA</td>
                            <td>51.6</td>
                            <td>n/a</td>
                            <td>51.6</td>
                            <td>n/a</td>
                            <td>51.6</td>
                            <td>n/a</td>
                            <td>51.7</td>
                            <td>n/a</td>
                            <td>Yes</td>
                            <td>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small>

            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Emissions</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th colspan="2" class="table-cell-double-wide">2017 Baseline</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year Target</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year (2019) Performance</th>
                        <th colspan="2" class="table-cell-double-wide">Four-Year Original Target</th>
                        <th colspan="2" class="table-cell-double-wide">Two-Year Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                            <td><strong>NJ</strong></td>
                            <td><strong>PA</strong></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: PM<sub>2.5</sub></td>
                            <td>9.572</td>
                            <td>25.870</td>
                            <td>4.29</td>
                            <td>10.76</td>
                            <td>162.02</td>
                            <td>143.21</td>
                            <td>8.52</td>
                            <td>20.49</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: NO<sub>x</sub></td>
                            <td>244.301</td>
                            <td>971.78</td>
                            <td>114.401</td>
                            <td>337.7</td>
                            <td>1,500.52</td>
                            <td>971.05</td>
                            <td>231.85</td>
                            <td>612.82</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: VOC<sub>s</sub></td>
                            <td>44.493</td>
                            <td>302.38</td>
                            <td>17.682</td>
                            <td>109.46</td>
                            <td>157.75</td>
                            <td>231.78</td>
                            <td>36.324</td>
                            <td>201.73</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Total Emission Reductions: CO</td>
                            <td>n/a</td>
                            <td>1,135.4</td>
                            <td>n/a</td>
                            <td>567.7</td>
                            <td>n/a</td>
                            <td>2,969.64</td>
                            <td>n/a</td>
                            <td>1,135.4<sup>1</sup></td>
                            <td>n/a</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>Four-year target was adjusted for Pennsylvania CO at the mid-term reporting period.</small>
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
            <article id="dates-wrapper">
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>May 20, 2017</strong><br />Final rule effective date.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>January 1, 2018</strong><br />1<sup>st</sup> four-year performance period begins.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>May 20, 2018</strong><br />Initial two- and four-year targets established.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>October 1, 2018</strong><br />Baseline Performance Period Report for the 1<sup>st</sup> Performance Period due. State DOTs report two-year and four-year targets. Within 180 days of relevant state DOT(s) target establishment MPOs must commit to support state target or establish separate quantifiable target.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2020</strong><br />Interim Progress Report for the 1<sup>st</sup> Performance Period due. State DOTs report two-year condition/performance and progress toward achieving two-year targets.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>September 30, 2021</strong><br />1<sup>st</sup> four-year performance period ends for CMAQ emissions measures.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>December 31, 2021</strong><br />1<sup>st</sup> four-year performance period ends for the remainder of the PM-3 measures.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>October 1, 2022</strong><br />Full Performance Period Progress Report for 1<sup>st</sup> performance period due. State DOTs report four-year condition/performance and progress toward achieving four-year targets. Baseline report due for 2<sup>nd</sup> performance period. State DOTs report two- and four-year targets and baseline condition.</p>
                </div>
            </article>

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://dvrpc.org/Reports/TM21003.pdf">DVRPC CMAQ Performance Plan</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/" target="blank" rel="noopener noreferrer">FHWA Transportation Performance Management Webpage</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/reporting/state/" target="blank" rel="noopener noreferrer">State Performance Dashboard and Reports</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/rule/170601pm3.pdf" target="blank" rel="noopener noreferrer">National Performance Management Measures to Assess System Performance, Freight Movement, and CMAQ Improvement Program Presentation</a></li>
                <li><a href="https://www.federalregister.gov/documents/2017/01/18/2017-00681/national-performance-management-measures-assessing-performance-of-the-national-highway-system" target="blank" rel="noopener noreferrer">Federal Register Rulemaking</a></li>
                <li><a href="https://dvrpcgis.maps.arcgis.com/apps/MapSeries/index.html?appid=732efbf95f76489598277df671b5d6b2" target="blank" rel="noopener noreferrer">DVRPC Congestion Management Process Webpage</a></li>
            </ul>
        `
    },
    'ptasp': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What Do We Measure?</h3>
            <p>Through the Public Transportation Agency Safety Plan (PTASP) rule, FTA requires transit agencies to implement a Safety Management System to manage safety risk, which can help agencies maintain or improve their safety performance.</p>
            <p>Transit agencies are required to develop Transit Agency Safety Plans (TASP) that establish performance targets based on the four measures included in FTA’s National Transit Public Safety Plan (NTPSP). The four measures are Fatalities, Injuries, Safety Events, and System Reliability. Transit agencies are required to report their targets and performance to the state DOT and the agency’s MPO in order to prioritize funding to improve transit safety performance.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Fatalities</h4>
            <p>The transit safety performance measure requires that transit providers set annual targets for the number of fatalities that occur on each mode of transit that the agency operates, excluding deaths that result from trespassing, suicide, or natural causes. The NTPSP defines the modes as rail, fixed guideway bus service, and non-fixed route bus service. Fatalities are required to be calculated for both the total number of fatalities and the fatality rate per vehicle revenue mile.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>Total fatalities, by mode, across the transit agency’s system.</li>
                <li>The rate of fatalities, by mode, per vehicle revenue mile operated by the transit agency.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Injuries</h4>
            <p>The PTASP requires that transit agencies set annual targets for the number of injuries that occur on each mode of transit that the agency operates. Injuries are defined as “harm to person that requires immediate medical attention away from the scene.” Injuries are required to be calculated for both the total number of injuries and the injury rate per vehicle revenue mile for each of the modes that the agency operates.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>Total injuries, by mode, across the transit agency’s system.</li>
                <li>The rate of injuries, by mode, per vehicle revenue mile operated by the transit agency.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Safety Events</h4>
            <p>Transit providers are required to set annual targets for the number and rate of safety events, by mode, that occur across the transit agency’s system. A safety event is defined by FTA as a “collision, derailment, fire, hazardous material spill, or evacuation.” Safety events are required to be calculated for both the total number of events and the event rate per vehicle revenue mile for each of the modes that the agency operates.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>Total safety events, by mode, across the transit agency’s system.</li>
                <li>The rate of safety events, by mode, per vehicle revenue mile operated by the transit agency.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">System Reliability</h4>
            <p>Transit providers are required to set annual targets for the agency’s system reliability for each mode of transit that the agency operates. The system reliability performance measure accounts for major mechanical failings of a vehicle that prevent the vehicle from starting or completing a scheduled trip. Mechanical failings and interrupted trips can create hazardous conditions for the transit operators and passengers depending on the location of the service interruption and if passengers are required to de-board in unsafe locations.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>The miles traveled between major mechanical failures calculated for each mode that the transit agency operates.</li>
            </ul>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What Are The Targets?</h3>
            <p>DVRPC agrees to be consistent with the respective SEPTA, NJ TRANSIT, and DRPA/PATCO targets for transit safety, and will support the transit operators’ efforts at achieving those targets.</p>
            <p>State DOTs and MPOs are required to support transit safety performance targets in coordination with the transit agencies and identify those targets in transportation planning documents. The state DOTs and MPOs are required to identify how funds are being spent to meet and support these safety targets.</p>

            <h4 class="tpm-content-subheaders theme-font-color">Fatalities</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th></th>
                        <th>Number of Fatalities<sup>1</sup></th>
                        <th class="table-cell-last">Rate of Fatalities<sup>2</sup></th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">System</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.0173 (per 100,000 miles)</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (River Line)</td>
                            <td>1</td>
                            <td class="table-cell-last">0.79 (per 1 million miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>4</td>
                            <td class="table-cell-last">0.055 (per 1 million miles)</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">System</td>
                            <td>0</td>
                            <td class="table-cell-last">0 (per 100,000 miles)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC  2021</small><br />
            <small><sup>1</sup>SEPTA did not report a target for the number of fatalities.</small><br />
            <small><sup>2</sup>SEPTA and DRPA/PATCO reported fatalities per 100,000 miles traveled. NJ Transit reported fatalities per 1,000,000 miles traveled.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Injuries</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th></th>
                        <th>Number of Injuries<sup>1</sup></th>
                        <th class="table-cell-last">Rate of Injuries<sup>2</sup></th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA Passenger Injuries</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">5.53 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">5.75 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (MFL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.79 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (BSL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.40 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (NHSL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">3.48 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">6.48 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.69 (per 100,000 miles)</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA Employee Injuries</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first"></td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">3.28 (per 200,000 hours)</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT Passenger Injuries</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (River Line)</td>
                            <td>4</td>
                            <td class="table-cell-last">3.18 (per 1 million miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>244</td>
                            <td class="table-cell-last">3.35 (per 1 million miles)</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT Employee Injuries</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (River Line)</td>
                            <td>0</td>
                            <td class="table-cell-last">0 (per 200,000 hours)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>423</td>
                            <td class="table-cell-last">7.99 (per 200,000 hours)</td>
                        </tr>                   
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">System</td>
                            <td>41</td>
                            <td class="table-cell-last">1 (per 100,000 miles)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>SEPTA did not report a target for the number of injuries.</small><br />
            <small><sup>2</sup>SEPTA and DRPA/PATCO reported passenger injuries per 100,000 miles travelled. NJ Transit reported passenger injuries per 1,000,000 miles travelled. Employee injuries for all agencies is per 200,000 hours.</small><br />
            <small>MFL = Market Frankford Line, BSL= Broad Street Line, NHSL= Norristown High Speed Line</small>

            <h4 class="tpm-content-subheaders theme-font-color">Safety Events</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th></th>
                        <th>Number of Safety Events<sup>1</sup></th>
                        <th class="table-cell-last">Rate of Safety Events<sup>2</sup></th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA Vehicle Accidents</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">8.18 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">9.51 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (MFL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.09 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (BSL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.07 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (NHSL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">2.30 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">8.38 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.07 (per 100,000 miles)</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA Station Accidents</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (MFL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">1.59 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (BSL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.56 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (NHSL)</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.72 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">1.01 (per 100,000 miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">0.95 (per 100,000 miles)</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA Safety Events (System)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>595</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td>13</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail</td>
                            <td>132</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td>104</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>3</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT Collisions</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (River Line)</td>
                            <td>12</td>
                            <td class="table-cell-last">9.53 (per 1 million miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>264</td>
                            <td class="table-cell-last">3.63 (per 1 million miles)</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT Fire Events</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (River Line)</td>
                            <td>2</td>
                            <td class="table-cell-last">1.59 (per 1 million miles)</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>12</td>
                            <td class="table-cell-last">0.16 (per 1 million miles)</td>
                        </tr>                   
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">System</td>
                            <td>50</td>
                            <td class="table-cell-last">1 (per 100,000 miles)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>SEPTA reported safety events for both station and vehicle accidents as a cumulative number for the system per year.</small><br />
            <small><sup>2</sup>SEPTA and DRPA/PATCO reported safety events per 100,000 miles. NJ Transit reported safety events per 1,000,000 miles.</small><br />
            <small>MFL = Market Frankford Line, BSL= Broad Street Line, NHSL= Norristown High Speed Line</small>

            <h4 class="tpm-content-subheaders theme-font-color">System Reliability</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th></th>
                        <th>Mean Distance in Miles between Major Service Failures</th>
                        <th class="table-cell-last">Total Service Failures</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (MFL)</td>
                            <td>85,000</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (BSL)</td>
                            <td>130,000</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail (NHSL)</td>
                            <td>35,000</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (City)</td>
                            <td>8,000</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (MSHL)</td>
                            <td>20,000</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>30,000</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail (River Line)</td>
                            <td>6,284</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>135.45<sup>1</sup></td>
                            <td class="table-cell-last">n/a</td>
                        </tr>                  
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">System</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">230<sup>2</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><sup>1</sup>NJ Transit reported the mean distance between major service failures for buses as a rate per 1,000,000 miles.</small><br />
            <small><sup>2</sup>DRPA/PATCO reported the total number of service failures.</small><br />
            <small>MFL = Market Frankford Line, BSL= Broad Street Line, NHSL= Norristown High Speed Line, MSHL=Media Sharon Hill Line</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>The transit safety targets were adopted by DVRPC in January 2021. Once the respective transit agencies report on their performance, it will be reported here.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
            <article id="dates-wrapper">
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>July 19, 2019</strong><br />Final Rule effective date.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>December 31, 2020</strong><br />1<sup>st</sup> TASP report due. TASP must be updated and certified by the transit agency each year after.</p>
                </div>
            </article>

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://www.transit.dot.gov/PTASP" target="blank" rel="noopener noreferrer">FTA PTASP Webpage</a></li>
                <li><a href="https://www.transit.dot.gov/sites/fta.dot.gov/files/docs/regulations-and-guidance/safety/public-transportation-agency-safety-program/117281/ptasp-fact-sheet-02-06-2019.pdf" target="blank" rel="noopener noreferrer">FTA PTASP Fact Sheet</a></li>
                <li><a href="https://www.transit.dot.gov/sites/fta.dot.gov/files/2020-04/SPT_Webinar_202002.pdf" target="blank" rel="noopener noreferrer">FTA Safety Performance Target Webinar</a></li>
                <li><a href="https://www.govinfo.gov/content/pkg/FR-2018-07-19/pdf/2018-15167.pdf" target="blank" rel="noopener noreferrer">Federal Register Rulemaking</a></li>
            </ul>
        `
    },
    'transitasset': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What Do We Measure?</h3>
            <p>Transit providers are required to coordinate with MPOs to set performance targets to assess the State of Good Repair for four capital asset categories. The providers are then required to develop a Transit Asset Management (TAM) Plan to identify local funding prioritization.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Rolling Stock</h4>
            <p>The performance-based planning regulation requires that transit providers set annual targets for the average age of their revenue generating vehicles (rolling stock) for each of 23 vehicle types. The targets specify the percentage of the transit provider’s rolling stock that exceeds (is older than) the Useful Life Benchmark (ULB) measured in years. The ULB is established by the transit provider with Federal Transit Agency (FTA) guidance. Specific targets are set for:</p>
            <ul>
                <li>Percentage of the transit provider’s rolling stock that have met or exceeded their ULB.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Equipment</h4>
            <p>Transit providers are required to set annual targets for the average age of their nonrevenue generating vehicles (equipment) for three vehicle types: automobiles, rubber-tired vehicles, and steel wheeled vehicles. Targets are only set for vehicles that are road-worthy, self-propelled maintenance or construction vehicles. The targets are set for the percentage of equipment, by vehicle category type, that exceed the nonrevenue generating fleet’s ULB. Specific targets are set for:</p>
            <ul>
                <li>Percentage of the transit provider’s support (nonrevenue) equipment that have met or exceeded their ULB.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Infrastructure</h4>
            <p>Transit providers are required to set annual targets for the percentage of fixed guideway track segments that have performance restrictions. A performance restriction is defined as a segment of guideway track miles where the maximum permissible speed of transit vehicles is below the guideway’s full-service speed. Restrictions can be caused by issues with rail fixed guideway, track, power, or signal systems. Performance restrictions should be measured at 9:00 AM local time on the first Wednesday of each month.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>Percentage of the transit provider’s fixed guideway track miles that have performance restrictions. The annual performance measure for Infrastructure is an average of each month’s performance restriction measure.</li>
            </ul>
            <h4 class="tpm-content-subheaders theme-font-color">Facilities</h4>
            <p>Transit providers are required to set annual targets for the percentage of facilities (by group) that are rated less than 3.0 on the Transit Economic Requirements Model (TERM) Scale. The two groups of facility types are Passenger and Administration Facilities. FTA requires that facility condition data be fully updated every four years, at a minimum. Agencies may choose to assess a quarter of their facilities every year, or more frequently. Each annual report must include updated facility condition data based on any assessments completed since the last report. Only facilities with direct capital responsibility require condition assessments.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>Percentage of assets with condition rating below 3.0 on the FTA TERM Scale for Passenger Facilities.</li>
                <li>Percentage of assets with condition rating below 3.0 on the FTA TERM Scale for Administration Facilities.</li>
            </ul>
            <p>MPOs may either establish quantitative targets for their metropolitan planning area or agree to adopt the respective transit agencies’ targets. DVRPC has adopted and supports the respective transit agency targets.</p>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What Are The Targets?</h3>
            <p>DVRPC agrees to be consistent with the respective SEPTA, NJ TRANSIT, and DRPA/PATCO annual transit asset management targets, and will support the transit operators’ efforts at achieving those targets. NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</p>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Rolling Stock That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-last">FY 2021 Targets</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td class="table-cell-last">15%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Car</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td class="table-cell-last">100%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td class="table-cell-last">66%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Vintage Trolley/Streetcar</td>
                            <td class="table-cell-last">100%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Over-the-Road Bus</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Minivan</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Sport Utility Vehicle</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Van</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Vehicle</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC  2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Support Equipment That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first table-cell-auto">National Transit Database Category</th>
                        <th class="table-cell-last">FY 2021 Targets</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobiles</td>
                            <td class="table-cell-last">50%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td class="table-cell-last">25%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td class="table-cell-last">55%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobiles</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Support Equipment</td>
                            <td class="table-cell-last">22%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Track Segments with Performance Restrictions</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-last">FY 2021 Targets</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td class="table-cell-last">10%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail</td>
                            <td class="table-cell-last">10%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Streetcar Rail</td>
                            <td class="table-cell-last">5%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Hybrid Rail</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">DRPA/PATCO</td>
                            <td class="table-cell-last">0.43%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Facilities Rated Below 3 on the TERM Scale</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-last">FY 2021 Targets</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td class="table-cell-last">5%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td class="table-cell-last">5%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="2"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="2" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>Transit agencies must demonstrate whether they are meeting the performance targets set forward in the agency’s TAM Plan. MPOs may set their own targets or adopt the transit agency targets. DVRPC supports the transit agency targets. MPOs are also required to demonstrate how funding will be allocated to assist the transit agencies meet the TAM targets.</p>
            <p>In order to meet the performance measurement targets, the annual performance measures must meet or exceed the established target for the transit agency’s fiscal year. There are no penalties associated with not meeting the TAM targets, but the annual performance measure tracking effort does help indicate where there are investments needed in transit assets to maintain the system in a state of good repair.</p>
            <p>DVRPC publishes the TAM performance measures in the relevant state TIPs along with a list of TIP-funded projects that will support the transit agency’s targets. NJ TRANSIT targets and performance toward meeting the targets will be reported once they have been finalized by the Federal Transit Administration.</p>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Rolling Stock That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-wide">FY 2020 Targets</th>
                        <th class="table-cell-wide">FY 2020 Performance</th>
                        <th class="table-cell-last">Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>10%</td>
                            <td>17.9%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Car</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td>66%</td>
                            <td>66%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Vintage Trolley/Streetcar</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Over-the-Road Bus</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Minivan</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Sport Utility Vehicle</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Van</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Vehicle</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Support Equipment That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-wide">FY 2020 Targets</th>
                        <th class="table-cell-wide">FY 2020 Performance</th>
                        <th class="table-cell-last">Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobiles</td>
                            <td>50%</td>
                            <td>41%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td>25%</td>
                            <td>33%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td>55%</td>
                            <td>49%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobiles</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Support Equipment</td>
                            <td>28%</td>
                            <td>16%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Track Segments with Performance Restrictions</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th>FY 2020 Targets</th>
                        <th>FY 2020 Performance</th>
                        <th class="table-cell-wide table-cell-last">Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>10%</td>
                            <td>3%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail</td>
                            <td>10%</td>
                            <td>1.6%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Streetcar Rail</td>
                            <td>5%</td>
                            <td>1.1%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Hybrid Rail</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">DRPA/PATCO</td>
                            <td>0.76%</td>
                            <td>0.32%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Facilities Rated Below 3 on the TERM Scale</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th>FY 2020 Targets</th>
                        <th>FY 2020 Performance</th>
                        <th class="table-cell-wide table-cell-last">Target Achieved?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td>5%</td>
                            <td>2%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td>5%</td>
                            <td>4%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ TRANSIT</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td></td>
                            <td></td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td>0%</td>
                            <td>7.7%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2021</small><br />
            <small><em>Note</em>: NJ TRANSIT targets will be reported once they have been finalized by the Federal Transit Administration.</small>
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
            <article id="dates-wrapper">
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2016</strong><br />Final Rule effective date.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>October 1, 2018</strong><br />1<sup>st</sup> TAM report due. Asset data reported in the National Transit Database annually.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2022</strong><br />TAM required to be updated in its entirety every four years.</p>
                </div>
            </article>

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://www.transit.dot.gov/PerformanceManagement" target="blank" rel="noopener noreferrer">FTA Performance Management Webpage</a></li>
                <li><a href="https://www.transit.dot.gov/TAM/FTAOutreachMaterials/perfmsrFS" target="blank" rel="noopener noreferrer">TAM Fact Sheet</a></li>
                <li><a href="https://www.govinfo.gov/content/pkg/FR-2016-07-26/pdf/2016-16883.pdf" target="blank" rel="noopener noreferrer">Federal Register Rulemaking</a></li>
            </ul>
        `
    }
}

export default ref
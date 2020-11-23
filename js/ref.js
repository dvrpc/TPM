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
            <p>DVRPC has agreed to adopt and support the New Jersey DOT and Pennsylvania DOT targets.</p>
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>NJ Baseline <br /> <small>(2014 - 2018)</small></th>
                        <th class="table-cell-last">NJ Target <br /> <small>(2016 - 2020)</small></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>581.6</td>
                            <td class="table-cell-last">582.8</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>0.759</td>
                            <td class="table-cell-last">0.744</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>1,110.8</td>
                            <td class="table-cell-last">1,167.9</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>1.449</td>
                            <td class="table-cell-last">1.489</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>392.7</td>
                            <td class="table-cell-last">407.9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: NJ DOT</small>
            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>PA Baseline <br /><small>(2014 - 2018)</small></th>
                        <th class="table-cell-last">PA Target <br /><small>(2016 - 2020)</small></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>1,182</td>
                            <td class="table-cell-last">1,171.9</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>1.169</td>
                            <td class="table-cell-last">1.148</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>3,839.6</td>
                            <td class="table-cell-last">4,400.3</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>3.797</td>
                            <td class="table-cell-last">4.309</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>679</td>
                            <td class="table-cell-last">781.7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>source: PennDOT</small>
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
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th class="table-cell-wide">Target<br /><small>(2014 - 2018)</small></th>
                        <th class="table-cell-wide">Actual<br /><small>(2014 - 2018)</small></th>
                        <th class="table-cell-wide">Baseline<br /><small>(2012 - 2016)</small></th>
                        <th class="table-cell-wide">Target Achieved?</th>
                        <th class="table-cell-wide">Better Than Baseline?</th>
                        <th class="table-cell-wide table-cell-last">Met or Made Significant Progress?*</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>586</td>
                            <td>581.6</td>
                            <td>571</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>0.778</td>
                            <td>0.759</td>
                            <td>0.762</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>1,105</td>
                            <td>1,110.8</td>
                            <td>1,135.6</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>1.467</td>
                            <td>1.449</td>
                            <td>1.516</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>386.5</td>
                            <td>392.7</td>
                            <td>390.3</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: NJ DOT</small><br />
            <small>*Four out of five targets must be met, or have better performance than the baseline.</small>
            <p>New Jersey has demonstrated that it has met or made significant progress towards meeting annual safety goals for calendar year (CY) 2018.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th class="table-cell-wide">Target<br /><small>(2014 - 2018)</small></th>
                        <th class="table-cell-wide">Actual<br /><small>(2014 - 2018)</small></th>
                        <th class="table-cell-wide">Baseline<br /><small>(2012 - 2016)</small></th>
                        <th class="table-cell-wide">Target Achieved?</th>
                        <th class="table-cell-wide">Better Than Baseline?</th>
                        <th class="table-cell-wide table-cell-last">Met or Made Significant Progress?*</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>1,177.6</td>
                            <td>1,182</td>
                            <td>1,220.2</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>1.161</td>
                            <td>1.169</td>
                            <td>1.220</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>3,799.8</td>
                            <td>3,839.6</td>
                            <td>3,434</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>3.746</td>
                            <td>3.797</td>
                            <td>3.433</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>654.4</td>
                            <td>679</td>
                            <td>602.4</td>
                            <td>No</td>
                            <td>No</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT</small><br />
            <small>*Four out of five targets must be met, or have better performance than the baseline.</small>
            <p>Pennsylvania did not meet or make significant progress towards its safety performance targets on three out of five performance measures: Number of Serious Injuries, Rate of Serious Injuries, and Number of Non-Motorized Fatalities and Serious Injuries for CY 2018. PennDOT is now required to submit an HSIP Implementation Plan. This plan is currently being written and is scheduled to be delivered to FHWA by the June 30, 2020 deadline. PennDOT is also required to use obligation authority equal to the HSIP apportionment for FY2018, which is $97,585,000, for safety projects in the upcoming fiscal year.</p>
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
                    <p class="dates-entry-text"><strong>June 30, 2020</strong><br />If a State has not met or made significant progress toward meeting its targets, the state must submit an HSIP Implementation Plan that describes actions the state will take to meet or make significant progress toward meeting its targets.</p>
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
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey Interstate Pavement Infrastructure Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target<sup>1</sup></th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Good Condition</td>
                            <td>61.25%</td>
                            <td>n/a</td>
                            <td class="table-cell-last">50.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Poor Condition</td>
                            <td>1.01%</td>
                            <td>n/a</td>
                            <td class="table-cell-last">2.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: NJ DOT</small><br />
            <small><sup>1</sup>Two-year targets are not required for Pavement Infrastructure on the Interstate system for this first reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">New Jersey Non-Interstate NHS Pavement Infrastructure Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Good Condition</td>
                            <td>32.45%</td>
                            <td>25%</td>
                            <td class="table-cell-last">25%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Poor Condition</td>
                            <td>2.38%</td>
                            <td>2.5%</td>
                            <td class="table-cell-last">2.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania Interstate Pavement Infrastructure Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target<sup>1</sup></th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Good Condition</td>
                            <td>67.2%</td>
                            <td>n/a</td>
                            <td class="table-cell-last">60.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Interstate Pavement Lane Miles in Poor Condition</td>
                            <td>0.4%</td>
                            <td>n/a</td>
                            <td class="table-cell-last">2.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT</small><br />
            <small><sup>1</sup>Two-year targets are not required for Pavement Infrastructure on the Interstate system for this first reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania Non-Interstate NHS Pavement Infrastructure Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Good Condition</td>
                            <td>36.8%</td>
                            <td>35.0%</td>
                            <td class="table-cell-last">33.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% Non-Interstate NHS Pavement Lane Miles in Poor Condition</td>
                            <td>2.3%</td>
                            <td>4.0%</td>
                            <td class="table-cell-last">5.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">New Jersey Bridge Infrastructure Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Good Condition</td>
                            <td>20.7%</td>
                            <td>19.4%</td>
                            <td class="table-cell-last">18.6%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Poor Condition</td>
                            <td>6.5%</td>
                            <td>6.5%</td>
                            <td class="table-cell-last">6.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania Bridge Infrastructure Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Good Condition</td>
                            <td>25.6%</td>
                            <td>25.8%</td>
                            <td class="table-cell-last">26.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">% NHS Bridge Deck Area in Poor Condition</td>
                            <td>5.5%</td>
                            <td>5.6%</td>
                            <td class="table-cell-last">6.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>State DOTs must show whether they have met or made significant progress toward meeting the targets. The states’ first two-year progress report is due in October 2020. Progress towards meeting the state infrastructure targets will be reported here when those reports are adopted by the DVRPC Board.</p>
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
            <h4 class="tpm-content-subheaders theme-font-color">Bridges</h4>
            <p>Meeting the Target: The federal Infrastructure PM Rule requires that no more than 10 percent of the total deck area of bridges on the NHS be considered structurally deficient in order to meet the federal threshold for bridge condition.</li>
            <span>If a state has not met the federal threshold for bridge conditions for three consecutive years, the state DOT shall:</span>
            <ul>
                <li>Obligate and set aside NHPP funds for eligible NHS bridge projects. The set-aside will remain in effect until the State meets the threshold of less than 10 percent of bridge deck area classified as structurally deficient.</li>
            </ul>
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
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey NHS Travel Time Reliability Targets (LOTTR)<sup>1</sup></h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Person Miles Traveled on Interstates with Reliable Travel Times (%)</td>
                            <td>82.0%</td>
                            <td>82.0%</td>
                            <td class="table-cell-last">82.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Person Miles Traveled on Non-Interstate NHS with Reliable Travel Times (%)</td>
                            <td>84.1%</td>
                            <td>n/a</td>
                            <td class="table-cell-last">84.1%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: University of Maryland CATT Lab, FHWA, NJ DOT</small><br />
            <small><sup>1</sup>Two-year targets are not required for the non-Interstate NHS system for this first reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania NHS Travel Time Reliability Targets (LOTTR)<sup>1</sup></h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Person Miles Traveled on Interstates with Reliable Travel Times (%)</td>
                            <td>89.8%</td>
                            <td>89.8%</td>
                            <td class="table-cell-last">89.8%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Person Miles Traveled on Non-Interstate NHS with Reliable Travel Times (%)</td>
                            <td>87.4%</td>
                            <td>n/a</td>
                            <td class="table-cell-last">87.4%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: University of Maryland CATT Lab, FHWA, PennDOT</small><br />
            <small><sup>1</sup>Two-year targets are not required for the non-Interstate NHS system for this first reporting period.</small>

            <h4 class="tpm-content-subheaders theme-font-color">New Jersey & Pennsylvania Freight Truck Travel Time Reliability (TTTR) Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target</th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">New Jersey TTTR</td>
                            <td>1.82</td>
                            <td>1.90</td>
                            <td class="table-cell-last">1.95</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Pennsylvania TTTR</td>
                            <td>1.34</td>
                            <td>1.34</td>
                            <td class="table-cell-last">1.34</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: University of Maryland CATT Lab, FHWA, NJ DOT, PennDOT</small>
            
            <h4 class="tpm-content-subheaders theme-font-color">DVRPC CMAQ Congestion Measures Targets for Relevant Urbanized Areas (UZA)</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Urbanized Area</th>
                        <th class="table-nested-header-first">Measure</th>
                        <th>2017 Baseline</th>
                        <th>2019 Two-Year Target<sup>1</sup></th>
                        <th class="table-cell-last">2021 Four-Year Target</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first table-cell-first-narrow">Philadelphia<br />PA-NJ-DE-MD UZA</td>
                            <td colspan="4">
                                <table>
                                    <tr>
                                        <td class="table-nested-cell-first">Non-SOV Travel</td>
                                        <td>27.9%</td>
                                        <td>28.0%</td>
                                        <td class="table-cell-last">28.1%</td>
                                    </tr>
                                    <tr class="table-cell-no-border">
                                        <td class="table-nested-cell-first">PHED (hours per capita)</td>
                                        <td>16.8</td>
                                        <td>n/a</td>
                                        <td class="table-cell-last">17.2</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-cell-first table-cell-first-narrow">New York<br />NY-NJ-CT UZA</td>
                            <td colspan="4">
                                <table>
                                    <tr>
                                        <td class="table-nested-cell-first">Non-SOV Travel</td>
                                        <td>51.6%</td>
                                        <td>51.6%</td>
                                        <td class="table-cell-last">51.7%</td>
                                    </tr>
                                    <tr class="table-cell-no-border">
                                        <td class="table-nested-cell-first">PHED (hours per capita)</td>
                                        <td>20.0</td>
                                        <td>n/a</td>
                                        <td class="table-cell-last">22.0</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: US Census Bureau ACS Five Year Estimates, University of Maryland CATT Lab, FHWA, PennDOT</small><br />
            <small><sup>1</sup>Two-year targets are not required for PHED for this first reporting period.</small>
    
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey CMAQ Emissions Reduction Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th colspan="2" class="theme-font-color">DVRPC 4-County<br />New Jersey Subregion</th>
                            <th colspan="2" class="theme-font-color">New Jersey Statewide</th>
                        </tr>
                        <tr>
                            <th class="table-cell-first">Measure</th>
                            <th>2020 Two-Year Target</th>
                            <th>2022 Four-Year Target</th>
                            <th>2020 Two-Year Target</th>
                            <th class="table-cell-last">2022 Four-Year Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">VOC <small>(Kg/day)</small></td>
                            <td>1.45</td>
                            <td>2.864</td>
                            <td>17.682</td>
                            <td class="table-cell-last">33.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">NO<sub>x</sub> <small>(Kg/day)</small></td>
                            <td>7.453</td>
                            <td>14.861</td>
                            <td>4.0%</td>
                            <td class="table-cell-last">5.0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">PM<sub>2.5</sub> <small>(Kg/day)</small></td>
                            <td>2.627</td>
                            <td>5.253</td>
                            <td>4.29</td>
                            <td class="table-cell-last">8.52</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">CO <small>(Kg/day)<sup>1</sup></small></td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td class="table-cell-last">n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: NJ DOT</small><br />
            <small><sup>1</sup>CO is not a required measure in New Jersey because all CO Maintenance Areas are beyond the Maintenance Plan horizons.</small>

            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania CMAQ Emissions Reduction Targets</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th colspan="2" class="theme-font-color">DVRPC 5-County<br />Pennsylvania Subregion</th>
                            <th colspan="2" class="theme-font-color">Pennsylvania Statewide</th>
                        </tr>
                        <tr>
                            <th class="table-cell-first">Measure</th>
                            <th>2020 Two-Year Target</th>
                            <th>2022 Four-Year Target</th>
                            <th>2020 Two-Year Target</th>
                            <th class="table-cell-last">2022 Four-Year Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">VOC <small>(Kg/day)</small></td>
                            <td>37.61</td>
                            <td>69.39</td>
                            <td>109.46</td>
                            <td class="table-cell-last">201.73</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">NO<sub>x</sub> <small>(Kg/day)</small></td>
                            <td>23.42</td>
                            <td>42.50</td>
                            <td>337.70</td>
                            <td class="table-cell-last">612.82</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">PM<sub>2.5</sub> <small>(Kg/day)</small></td>
                            <td>1.08</td>
                            <td>2.06</td>
                            <td>10.76</td>
                            <td class="table-cell-last">20.49</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">PM<sub>10</sub> <small>(Kg/day)<sup>1</sup></small></td>
                            <td>n/a</td>
                            <td>n/a</td>
                            <td>9.54</td>
                            <td class="table-cell-last">17.47</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">CO <small>(Kg/day)</small></td>
                            <td>282.74</td>
                            <td>565.47</td>
                            <td>567.70</td>
                            <td class="table-cell-last">1,135.40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT</small><br />
            <small><sup>1</sup>PM<sub>10</sub> is not a required measure in the DVRPC region because this region has never been in non-attainment of the PM<sub>10</sub> standards.</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>State DOTs must submit interim and full term (two- and four-year) progress reports for all of the system performance measures to demonstrate whether they have met or made significant progress toward meeting the targets. FHWA will only provide significant progress determinations for the LOTTR and TTTR measures. The states’ first two-year progress report is due in October 2020. Progress towards meeting the system performance targets will be reported here when the interim progress reports are adopted by the DVRPC Board.</p>
            <h4 class="tpm-content-subheaders theme-font-color">NHS Travel Time Reliability (LOTTR)</h4>
            <p>Meeting the Target: The federal NHS travel time reliability rule requires that state DOTs set separate targets for travel time reliability on the entire Interstate system and the non-Interstate NHS system within the state based on the person miles traveled on the percentage of system miles that are deemed reliable for travel time. States meet the targets if the Interstate and non-Interstate NHS system performance is equal to or below the baseline condition or the target established by DOT.</p>
            <p>If the state does not meet the baseline condition or exceeds its target of travel time reliability on the Interstate system or non-Interstate system (measured separately), the state shall provide documentation identifying why the target wasn’t met and actions that will be taken to improve system reliability.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Freight Reliability (TTTR)</h4>
            <p>Meeting the Target: The federal freight system reliability rule requires that state DOTs set a target for truck travel time reliability on the Interstate system based on the ratio of the congested period (95th percentile) travel time to the normal (50th percentile) period travel time on the Interstate system. States meet the targets if the Interstate performance is equal to or below the baseline condition or the target established by the state DOT.</p>
            <p>If the state does not meet or exceeds the baseline condition or its targeted ratio of travel times on the Interstate system. The state shall provide additional documentation identifying why the target wasn’t met and actions (in addition to those that are being taken to improve the LOTTR) that are being taken to improve freight system reliability performance.</p>
            <h4 class="tpm-content-subheaders theme-font-color">CMAQ Performance Measures</h4>
            <h4 class="tpm-content-subheaders theme-font-color">PHED and Percent of Non-SOV Travel</h4>
            <p>Meeting the Target: The federal rules requiring the assessment of the CMAQ program’s effectiveness in reducing traffic congestion requires that state DOTs work with MPOs to collaboratively establish two- and four-year targets for PHED on the NHS and percent non-SOV travel in UZAs with populations greater than one million people in the first performance period (2018–2022) and in UZAs with population greater than 200,000 people in subsequent performance periods. The impacted MPOs and state DOTs first period progress reports on the CMAQ congestion measures are due in October 2020. DOTs and MPOs are meeting their two and four-year targets if PHED and percent non-SOV travel in the UZA is equal to or below the targets established by the MPOs and state DOTs. If the states and MPOs do not meet these targets, they are able to adjust the targets and evaluate future CMAQ investments that may improve progress towards meeting the targets.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Emissions Reductions Targets</h4>
            <p>Meeting the Target: The federal rules requiring the assessment of the CMAQ program’s effectiveness in reducing on-road mobile emissions require that state DOTs and MPOs serving UZAs with over one million people establish two- and four-year targets for the amount of applicable emissions that are reduced through CMAQ funded projects for both the MPO region and statewide. Applicable emissions are determined by the attainment status of the criteria pollutants. The impacted MPOs and state DOTs first period progress reports on the CMAQ congestion measures are due in October 2020. If the states and MPOs do not meet these targets, they are able to adjust the targets and evaluate future CMAQ investments that may improve progress towards meeting the targets.</p>
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
            <p>The PTASP Rule became effective on July 19, 2019. The first transit agency safety plans were originally due in July 2020; however, due to the COVID-19 Pandemic, FTA is extending the report deadline to December 31, 2020.</p>
            <p>The safety targets for the transit agencies that operate in the DVRPC region (SEPTA, NJ Transit, and DRPA/PATCO) will be reported in this section when those plans are available.</p>
            <p>State DOTs and MPOs are required to support transit safety performance targets in coordination with the transit agencies and identify those targets in transportation planning documents. The state DOTs and MPOs are required to identify how funds are being spent to meet and support these safety targets.</p>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>Under the FTA PTASP Rule, transit agency safety plans are not due until December 31, 2020. Results will be published here when they become available.</p>
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
            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Rolling Stock That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-wide-extra">Useful Life Benchmark (years)</th>
                        <th class="table-cell-wide table-cell-last">FY 2020 Targets</th>
                    </thead class="table-cell-wide">
                    <tbody>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td>14</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>14</td>
                            <td class="table-cell-last">10%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Car</td>
                            <td>35(MFL/NHSL)<br />40(BSS)</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td>30</td>
                            <td class="table-cell-last">100%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td>30</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td>30</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td>30</td>
                            <td class="table-cell-last">66%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td>7</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td>18</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Vintage Trolley/Streetcar</td>
                            <td>15</td>
                            <td class="table-cell-last">100%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td>12</td>
                            <td class="table-cell-last">20%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td>8</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Over-the-Road Bus</td>
                            <td>14</td>
                            <td class="table-cell-last">45.4%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>12</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td>12</td>
                            <td class="table-cell-last">1.5%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td>31</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Minivan</td>
                            <td>8</td>
                            <td class="table-cell-last">4.35%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td>30</td>
                            <td class="table-cell-last">6.37%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td>30</td>
                            <td class="table-cell-last">17.94%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td>30</td>
                            <td class="table-cell-last">100%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Van</td>
                            <td>8</td>
                            <td class="table-cell-last">1.53%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Vehicle</td>
                            <td>39</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT, NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Support Equipment That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-wide-extra">Useful Life Benchmark (years)</th>
                        <th class="table-cell-wide table-cell-last">FY 2020 Targets</th>
                    </thead class="table-cell-wide">
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td>8</td>
                            <td class="table-cell-last">50%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td>14</td>
                            <td class="table-cell-last">25%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td>25</td>
                            <td class="table-cell-last">55%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">52.76%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td>14</td>
                            <td class="table-cell-last">50.63%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td>25</td>
                            <td class="table-cell-last">24.1%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Support Equipment</td>
                            <td>Not Reported</td>
                            <td class="table-cell-last">28%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT, NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Track Segments with Performance Restrictions</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-last">FY 2020 Targets</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
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
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td class="table-cell-last">1%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td class="table-cell-last">4.1%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Hybrid Rail</td>
                            <td class="table-cell-last">0.43%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">DRPA/PATCO</td>
                            <td class="table-cell-last">0.76%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT, NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Facilities Rated Below 3 on the TERM Scale</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-last">FY 2020 Targets</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td class="table-cell-last">5%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td class="table-cell-last">5%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td class="table-cell-last">0%</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
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
            <small>Source: PennDOT, NJ DOT</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How Are We Doing?</h3>
            <p>Transit agencies must demonstrate whether they are meeting the performance targets set forward in the agency’s TAM Plan. MPOs may set their own targets or adopt the transit agency targets. DVRPC supports the transit agency targets. MPOs are also required to demonstrate how funding will be allocated to assist the transit agencies meet the TAM targets.</p>
            <p>In order to meet the performance measurement targets, the annual performance measures must meet or exceed the established target for the transit agency’s fiscal year. There are no penalties associated with not meeting the TAM targets, but the annual performance measure tracking effort does help indicate where there are investments needed in transit assets to maintain the system in a state of good repair.</p>
            <p>DVRPC publishes the TAM performance measures in the relevant state TIPs along with a list of TIP-funded projects that will support the transit agency’s targets.</p>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Rolling Stock That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-wide-extra">Useful Life Benchmark (years)</th>
                        <th class="table-cell-wide">FY 2019 Targets</th>
                        <th class="table-cell-wide">FY 2019 Measure</th>
                        <th class="table-cell-wide table-cell-last">Meeting the Target?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td>14</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>14</td>
                            <td>10%</td>
                            <td>12.4%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Car</td>
                            <td>35(MFL/NHSL)<br />40(BSS)</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td>30</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td>30</td>
                            <td>50%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td>30</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td>30</td>
                            <td>66%</td>
                            <td>66%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td>7</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trolley Bus</td>
                            <td>18</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Vintage Trolley/Streetcar</td>
                            <td>15</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Articulated Bus</td>
                            <td>12</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td>8</td>
                            <td>28.89%</td>
                            <td>28.89%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Over-the-Road Bus</td>
                            <td>14</td>
                            <td>45%</td>
                            <td>52.02%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Bus</td>
                            <td>12</td>
                            <td>0%</td>
                            <td>0.16%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Cutaway Car</td>
                            <td>12</td>
                            <td>13.19%</td>
                            <td>11.67%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail Vehicle</td>
                            <td>31</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Minivan</td>
                            <td>8</td>
                            <td>4.35%</td>
                            <td>2.13%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Locomotive</td>
                            <td>30</td>
                            <td>6.41%</td>
                            <td>7.55%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Passenger Coach</td>
                            <td>30</td>
                            <td>18.26%</td>
                            <td>17.94%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail Self-Propelled Passenger Car</td>
                            <td>30</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Van</td>
                            <td>8</td>
                            <td>1.53%</td>
                            <td>2.74%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA / PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail Passenger Vehicle</td>
                            <td>39</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT, NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percentage of Support Equipment That Have Met or Exceeded Their Useful Life Benchmark</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th class="table-cell-wide-extra">Useful Life Benchmark (years)</th>
                        <th class="table-cell-wide">FY 2019 Targets</th>
                        <th class="table-cell-wide">FY 2019 Measure</th>
                        <th class="table-cell-wide table-cell-last">Meeting the Target?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td>8</td>
                            <td>75%</td>
                            <td>43%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td>14</td>
                            <td>40%</td>
                            <td>20%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td>25</td>
                            <td>60%</td>
                            <td>51%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Automobile</td>
                            <td>Not Reported</td>
                            <td>39%</td>
                            <td>58.16%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Trucks and Other Rubber Tire Vehicles</td>
                            <td>14</td>
                            <td>47%</td>
                            <td>50.4%</td>
                            <td class="table-cell-last">No</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Steel Wheel Vehicles</td>
                            <td>25</td>
                            <td>25%</td>
                            <td>23.6%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Support Equipment</td>
                            <td>Not Reported</td>
                            <td>24%</td>
                            <td>22%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT, NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Track Segments with Performance Restrictions</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th>FY 2019 Targets</th>
                        <th>FY 2019 Measure</th>
                        <th class="table-cell-wide table-cell-last">Meeting the Target?</th>
                    </thead>
                    <tbody>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">SEPTA</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>10%</td>
                            <td>3.5%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Heavy Rail</td>
                            <td>10%</td>
                            <td>1.8%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Streetcar Rail</td>
                            <td>5%</td>
                            <td>1.3%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Commuter Rail</td>
                            <td>1.00%</td>
                            <td>Did Not Report</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Light Rail</td>
                            <td>4.1%</td>
                            <td>Did Not Report</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Hybrid Rail</td>
                            <td>0.43%</td>
                            <td>Did Not Report</td>
                            <td class="table-cell-last"></td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">DRPA/PATCO</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">DRPA/PATCO</td>
                            <td>1.44%</td>
                            <td>0.23%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: PennDOT, NJ DOT</small>

            <h4 class="tpm-content-subheaders theme-font-color">Percent of Facilities Rated Below 3 on the TERM Scale</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">National Transit Database Category</th>
                        <th>FY 2019 Targets</th>
                        <th>FY 2019 Measure</th>
                        <th class="table-cell-wide table-cell-last">Meeting the Target?</th>
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
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr class="table-cell-no-border"><td colspan="3"></td></tr>
                        <tr class="table-cell-no-border">
                            <td colspan="3" class="table-nested-header-first theme-font-color">NJ Transit</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Passenger Facilities</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Administration Facilities</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td class="table-cell-last">Yes</td>
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
            <small>Source: PennDOT, NJ DOT</small>
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
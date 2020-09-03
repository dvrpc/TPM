/* Style Reference:
<h2 class="content-hesection-ader"></</h2>

<h4 class="tpm-content-subheaders theme-font-color"></h4>

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
            <h3 class="tpm-content-section-header theme-font-color">What do We Measure?</h3>
            <p>State Departments of Transportation (DOTs) and Metropolitan Planning Organizations (MPOs) must set annual targets for five safety-related performance measures, with the goal of achieving a significant reduction in traffic fatalities and serious injuries on all public roads. State DOTs report baseline values, targets, and progress toward reducing the number and rate of fatalities, the number and rate of serious injuries, and the number of non-motorized fatalities and serious injuries to FHWA in an annual safety report. MPOs may either establish quantitative targets for their metropolitan planning area or agree to adopt the statewide targets. </p>
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
            <h3 class="tpm-content-section-header theme-font-color">What are the Targets?</h3>
            <h4 class="tpm-content-subheaders theme-font-color">New Jersey</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>NJ Target <br /> <small>(2016 - 2020)</small></th>
                        <th class="table-cell-last">NJ Baseline <br /> <small>(2014 - 2018)</small></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>582.8</td>
                            <td class="table-cell-last">581.6</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rise in Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>0.744</td>
                            <td class="table-cell-last">0.759</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>1,167.9</td>
                            <td class="table-cell-last">1,110.8</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>1.489</td>
                            <td class="table-cell-last">1.449</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>407.9</td>
                            <td class="table-cell-last">392.7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>Source: DVRPC 2020</small>
            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>PA Target <br /><small>(2016 - 2020)</small></th>
                        <th class="table-cell-last">PA Baseline <br /><small>(2014 - 2018)</small></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-cell-first">Number of Fatalities</td>
                            <td>1,171.9</td>
                            <td class="table-cell-last">1,182</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rise in Fatalities<br /><small>(per 100 million VMT)</small></td>
                            <td>1.148</td>
                            <td class="table-cell-last">1.169</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Serious Injuries</td>
                            <td>4,400.3</td>
                            <td class="table-cell-last">3,839.6</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Rate of Serious Injuries<br /><small>(per 100 million VMT)</small></td>
                            <td>4.309</td>
                            <td class="table-cell-last">3.797</td>
                        </tr>
                        <tr>
                            <td class="table-cell-first">Number of Non-Motorized Fatalities and Serious Injuries</td>
                            <td>781.7</td>
                            <td class="table-cell-last">679</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <small>source: DVRPC 2020</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How are We Doing?</h3>
            <p>State DOTs report baseline values, targets, and progress toward meeting the targets to FHWA in an annual safety report. FHWA will determine whether a state has met or made significant progress toward its safety performance targets. A state is considered to have met or made significant progress when at least four out of the five safety performance targets are met or the actual outcome for the safety performance target is better than baseline performance.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Meeting a Target:</h4>
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
                        <th>Target<br /><small>(2014 - 2018)</small></th>
                        <th>Actual<br /><small>(2014 - 2018)</small></th>
                        <th>Baseline<br /><small>(2012 - 2016)</small></th>
                        <th>Target Achieved?</th>
                        <th>Better Than Baseline?</th>
                        <th class="table-cell-last">Met or Made Significant Progress?*</th>
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
            <small>Source: DVRPC 2020</small><br />
            <small>*Four out of five targets must be met, or have better performance than the baseline.</small>
            <p>New Jersey has demonstrated that it has met or made significant progress towards meeting annual safety goals for calendar year (CY) 2018.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Pennsylvania</h4>
            <div class="table-overflow-wrapper">
                <table>
                    <thead>
                        <th class="table-cell-first">Measure</th>
                        <th>Target<br /><small>(2014 - 2018)</small></th>
                        <th>Actual<br /><small>(2014 - 2018)</small></th>
                        <th>Baseline<br /><small>(2012 - 2016)</small></th>
                        <th>Target Achieved?</th>
                        <th>Better Than Baseline?</th>
                        <th class="table-cell-last">Met or Made Significant Progress?*</th>
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
            <small>Source: DVRPC 2020</small><br />
            <small>*Four out of Five targets must be met, or have better performance than the baseline.</small>
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
                <li><a href="https://safety.fhwa.dot.gov/hsip/spm/" target="blank" rel="noopener noreferrer">FHWA Safety Performance Management webpage</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/reporting/state/" target="blank" rel="noopener noreferrer">State Performance Dashboard and Reports</a></li>
                <li><a href="https://www.penndot.gov/TravelInPA/Safety/Pages/Strategic-Highway-Safety-Plan.aspx" target="blank" rel="noopener noreferrer">Pennsylvania Strategic Highway Safety Plan</a></li>
                <li><a href="https://www.saferoadsforallnj.com" target="blank" rel="noopener noreferrer">New Jersey Strategic Highway Safety Plan</a>
                <li><a href="https://www.federalregister.gov/documents/2016/03/15/2016-05202/national-performance-management-measures-highway-safety-improvement-program" target="blank" rel="noopener noreferrer">Safety Performance Measure Final Rule</a></li>
            </ul>
        `
    },
    'bridgepavement': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What do We Measure?</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Pavement</h4>
            <p>State Departments of Transportation (DOTs) must establish targets, regardless of ownership, for the full extent of the Interstate and non-Interstate National Highway System (NHS).  FHWA has set numerical standards that categorize pavement conditions as good, fair, or poor.  Pavement in good condition suggests no major investment is needed. Pavement in poor condition suggests that major reconstruction investment is needed. Road pavements are classified as one of three types: concrete, bituminous (also known as asphalt), and jointed concrete—which is a series of contiguous concrete slabs joined together. Pavement condition is determined by specific measures, which include the International Roughness Index (IRI), cracking, rutting, and faulting:</p>
            <ul>
                <li>IRI quantifies how rough the pavement is by measuring the longitudinal profile of a traveled wheel track and generating a standardized roughness value in inches per mile. </li>
                <li>Cracking measures the percentage of bituminous and concrete pavement surface that is cracked. </li>
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
                <li>Percentage of NHS bridge deck area that is in good condition for all mainline Interstate Highway System bridges</li>
                <li>Percentage of NHS bridge deck area that is in good condition for all mainline non-Interstate NHS bridges</li>
            </ul>
            <p>The states are also required to set goals for the percentage of NHS bridge deck area that is in good condition for all mainline Interstate Highway System and non-Interstate NHS bridges regardless of who owns or is responsible for maintaining the bridge. Bridges that are determined to be structurally deficient, in the NBI, are considered to be in poor condition.</p>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What are the Targets?</h3>
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
            <small>Source: DVRPC 2018</small><br />
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
            <small>Source: DVRPC 2018</small>

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
            <small>Source: DVRPC 2018</small><br />
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
            <small>Source: DVRPC 2018</small>

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
            <small>Source: DVRPC 2018</small>

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
            <small>Source: DVRPC 2018</small>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How are We Doing?</h3>
            <p>State DOTs must show whether they have met or made significant progress toward meeting the targets. The states’ first two-year progress report is due in October 2020. Progress towards meeting the state infrastructure targets will be reported here when those reports are adopted by the DVRPC Board.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Pavement</h4>
            <p>Meeting the Target: The federal Infrastructure PM Rule requires that less than 5 percent of Interstate miles be considered in poor condition in order to meet the federal threshold for pavement condition.</p>
            <span>If pavement conditions on the <strong>Interstate</strong> system fail to meet the federal minimum condition thresholds in the most recent year of the State biennial report, the state DOT must comply with the provisions set forth in 23 USC 119(f) for the subsequent fiscal year. The State shall:</span>
            <ol>
                <li>Use obligation authority to transfer a portion of State Transportation Planning (STP) funds to the NHPP for maintenance projects to address interstate pavement conditions.</li>
                <li>Submit a Transportation Asset Management Plan (TAMP) that describes actions the state will take to meet or make significant progress toward meeting its targets. The TAMP should guide the state's project decisions in order to meet or make significant progress toward meeting its infrastructure performance targets in subsequent years.</li>
            </ol>
            <span>If a state has not met or made significant progress toward meeting its targets on the <strong>non-Interstate NHS system</strong>, the state DOT shall:</span>
            <ol>
                <li>Submit a TAMP that describes actions the state will take to meet or make significant progress toward meeting its targets. The TAMP should guide the state's project decisions in order to meet or make significant progress toward meeting its infrastructure performance targets in subsequent years.</li>
            </ol>
            <h4 class="tpm-content-subheaders theme-font-color">Bridges</h4>
            <p>Meeting the Target: The federal Infrastructure PM Rule requires that no more than 10 percent of the total deck area of bridges on the NHS be considered structurally deficient in order to meet the federal threshold for bridge condition.</li>
            <span>If a state has not met the federal threshold for bridge conditions for three consecutive years, the state DOT shall:</span>
            <ol>
                <li>Obligate and set aside NHPP funds for eligible NHS bridge projects. The set-aside will remain in effect until the State meets the threshold of less than 10 percent of bridge deck area classified as structurally deficient.</li>
            </ol>
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
                    <p class="dates-entry-text"><strong>January 1, 2018</strong><br />1st four-year performance period begins.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>May 20, 2018</strong><br />Initial two- and four-year targets established.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>October 1, 2018</strong><br />Baseline Performance Period Report for the 1st Performance Period due. State DOTs report two-year and four-year targets; etc. Within 180 days of relevant state DOT(s) target establishment MPOs must commit to support state target or establish separate quantifiable target.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2020</strong><br />Mid Performance Period Progress Report for the 1st Performance Period due. State DOTs report two-year condition/performance; progress toward achieving two-year targets; etc.</p>
                </div>
                <div class="dates-entry dates-entry-right">
                    <span class="dates-circle dates-circle-right"></span>
                    <p class="dates-entry-text"><strong>December 31, 2021</strong><br />1st four-year performance period ends.</p>
                </div>
                <div class="dates-entry dates-entry-left">
                    <span class="dates-circle dates-circle-left"></span>
                    <p class="dates-entry-text"><strong>October 1, 2022</strong><br />Full Performance Period Progress Report for 1st performance period due. State DOTs report four-year condition/performance; progress toward achieving four-year targets; etc. Baseline report due for 2nd performance period due. State DOTs report two- and 4four-year targets; baseline condition, etc.</p>
                </div>
            </article>

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://www.fhwa.dot.gov/asset/plans.cfm" target="blank" rel="noopener noreferrer">State Asset Management Plans</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/reporting/state/" target="blank" rel="noopener noreferrer">State Performance Dashboard and Reports</a></li>
                <li><a href="https://www.fhwa.dot.gov/tpm/" target="blank" rel="noopener noreferrer">FHWA Transportation Performance Management Webpage</a></li>
                <li><a href="https://www.federalregister.gov/documents/2017/01/18/2017-00550/national-performance-management-measures-assessing-pavement-condition-for-the-national-highway" target="blank" rel="noopener noreferrer">Federal Register rulemaking</a></li>
                <li><a href="https://www.dvrpc.org/Reports/20016.pdf" target="blank" rel="noopener noreferrer">Connections 2045: Long-Range Plan for Greater Philadelphia Amendment</a></li>
                <li><a href="https://uscode.house.gov/view.xhtml?req=(title:23%20section:119%20edition:prelim)" target="blank" rel="noopener noreferrer">23 U.S. Code Section 119</a></li>
            </ul>
        `
    },
    'systemperf': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What do We Measure?</h3>
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
            <p>State DOTs, in collaboration with the appropriate MPOs, must establish single, unified targets for the Peak Hour Excessive Delay (PHED) and Percent Non-Single Occupant Vehicle (non-SOV) Travel on the NHS in urbanized areas (UZAs) that intersect with Clean Air Act Nonattainment or Maintenance Areas. Single targets are established for an entire UZA across state and MPO boundaries through a collaborative planning process. Peak Hour Excessive delay (PHED) per capita on the NHS is the threshold for excessive delay and is based on the travel time at 20 miles per hour or 60 percent of the posted speed limit travel time, whichever is greater, and is measured in 15-minute intervals. Peak travel hours are defined as 6–10 a.m. on weekday mornings and the weekday afternoon period is 3–7 p.m. The total excessive delay metric is weighted by vehicle volumes and occupancy.</p>
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
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What are the Targets?</h3>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How are We Doing?</h3>
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
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

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
        `
    },
    'ptasp': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What do We Measure?</h3>
            <p>Through the Public Transportation Agency Safety Plan (PTASP) rule, FTA requires transit agencies to implement a Safety Management System to manage safety risk, which can help agencies maintain or improve their safety performance.</p>
            <p>Transit agencies are required to develop Transit Agency Safety Plans (TASP) that establish performance targets based on the four measures included in FTA’s National Transit Public Safety Plan (NTPSP). The four measures are Fatalities, Injuries, Safety Events, and System Reliability. Transit agencies are required to report their targets and performance to the state DOT and the agency’s MPO in order to prioritize funding to improve transit safety performance.</p>
            <h4 class="tpm-content-subheaders theme-font-color">Fatalities</h4>
            <p>The transit safety performance measure requires that transit providers set annual targets for the number of fatalities that occur on each mode of transit that the agency operates, excluding deaths that result from trespassing, suicide, or natural causes. The NTPSP defines the modes as rail, fixed guideway bus service, and non-fixed route bus service. Fatalities are required to be calculated for both the total number of fatalities and the fatality rate per vehicle revenue mile.</p>
            <span>Specific targets are set for:</span>
            <ul>
                <li>Total fatalities, by mode, across the transit agency’s system.</li>
                <li>The rate of fatalities, by mode, per vehicle revenue mile operated by the transit agency. </li>
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
            <h3 class="tpm-content-section-header theme-font-color">What are the Targets?</h3>
            <p>The PTASP Rule became effective on July 19, 2019. The first transit agency safety plans were originally due in July 2020; however, due to the COVID-19 Pandemic, FTA is extending the report deadline to December 31, 2020.</p>
            <p>The safety targets for the transit agencies that operate in the DVRPC region (SEPTA, NJ Transit, and DRPA/PATCO) will be reported in this section when those plans are available.</p>
            <p>State DOTs and MPOs are required to support transit safety performance targets in coordination with the transit agencies and identify those targets in transportation planning documents. The state DOTs and MPOs are required to identify how funds are being spent to meet and support these safety targets.</p>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How are We Doing?</h3>
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
                    <p class="dates-entry-text"><strong>December 31, 2020</strong><br />1st TASP report due. TASP must be updated and certified by the transit agency each year after.</p>
                </div>
            </article>

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
            <ul>
                <li><a href="https://www.transit.dot.gov/PTASP" target="blank" rel="noopener noreferrer">FTA PTASP webpage</a></li>
                <li><a href="https://www.transit.dot.gov/sites/fta.dot.gov/files/docs/regulations-and-guidance/safety/public-transportation-agency-safety-program/117281/ptasp-fact-sheet-02-06-2019.pdf" target="blank" rel="noopener noreferrer">FTA PTASP Fact Sheet</a></li>
                <li><a href="https://www.transit.dot.gov/sites/fta.dot.gov/files/2020-04/SPT_Webinar_202002.pdf" target="blank" rel="noopener noreferrer">FTA Safety Performance Target Webinar</a></li>
                <li><a href="https://www.govinfo.gov/content/pkg/FR-2018-07-19/pdf/2018-15167.pdf" target="blank" rel="noopener noreferrer">Federal Register Rulemaking</a></li>
            </ul>
        `
    },
    'transitasset': {
        'measure': `
            <h3 class="tpm-content-section-header theme-font-color">What do We Measure?</h3>
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
                <li>ercentage of assets with condition rating below 3.0 on the FTA TERM Scale for Passenger Facilities.</li>
                <li>ercentage of assets with condition rating below 3.0 on the FTA TERM Scale for Administration Facilities.</li>
            </ul>
        `,
        'targets': `
            <h3 class="tpm-content-section-header theme-font-color">What are the Targets?</h3>
        `,
        'how': `
            <h3 class="tpm-content-section-header theme-font-color">How are We Doing?</h3>
        `,
        'dates': `
            <h3 class="tpm-content-section-header theme-font-color">Key Dates & Resources</h3>
            <h4 class="tpm-content-subheaders theme-font-color">Key Dates</h4>
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

            <h4 class="tpm-content-subheaders theme-font-color">Resources</h4>
        `
    },
}

export default ref